---
title: Infrastructure
description: Core runtime and development containers, Podman commands, and in-memory H2 storage.
---

Core has two container setups: a packaged application image for running the service, and a VS Code development container for working on the source. Both use Java 25. H2 runs in memory inside the Java process; there is no separate database container or database volume.

This page reflects the current `9l-sre-core` Dockerfiles, application configuration, and development guide. Commands run from that repository, not from the documentation repository. The configuration was inspected for this documentation; the containers were not built or started as part of this update.

## Runtime container

The root `Dockerfile` uses two stages:

| Stage   | Image                                      | Purpose                                            |
| ------- | ------------------------------------------ | -------------------------------------------------- |
| Build   | `docker.io/library/eclipse-temurin:25-jdk` | Run the Gradle wrapper’s tests and `bootJar` task. |
| Runtime | `docker.io/library/eclipse-temurin:25-jre` | Run the resulting `app.jar`.                       |

The build runs `./gradlew --no-daemon test bootJar`, so a host JDK or Gradle installation is not required. The runtime runs as user and group `10001:10001`, exposes port 8080, and starts `java -jar /app/app.jar`.

`JAVA_TOOL_OPTIONS` sets `-XX:MaxRAMPercentage=50.0 -XX:+ExitOnOutOfMemoryError`. The documented local run limits container memory to 512 MiB and publishes the service on the host’s loopback address.

### Build and run with Podman

Start the Podman machine on macOS if it is stopped:

```sh
podman machine start
```

From `9l-sre-core`:

```sh
podman build -t localhost/srecore:dev .
podman run -d --name srecore --memory=512m \
  -p 127.0.0.1:8080:8080 localhost/srecore:dev
```

| URL                                     | Purpose                 |
| --------------------------------------- | ----------------------- |
| `http://localhost:8080/`                | Service landing page.   |
| `http://localhost:8080/docs`            | API documentation page. |
| `http://localhost:8080/actuator/health` | Health endpoint.        |

Inspect or stop the service:

```sh
podman logs srecore
curl --fail http://localhost:8080/actuator/health
podman stop srecore
```

Use `podman start srecore` to start the existing container again. After changing the application source, rebuild the image, stop and remove the old container with `podman rm srecore`, then repeat the run command. This replaces the container; application data is already lost when the Java process stops.

The server uses `PORT` when supplied, otherwise 8080. If changing the container’s server port, update the port mapping to match.

## Development container

The local `.devcontainer/Dockerfile` uses the Java 25 JDK image and installs Git, CA certificates, and the OpenSSH client. VS Code mounts the source into the development container; Gradle runs against that mounted source.

1. Install the VS Code Dev Containers extension and configure `dev.containers.dockerPath` as `podman` in user settings.
2. Ensure the Podman machine is running.
3. Open `9l-sre-core` and run **Dev Containers: Reopen in Container**.
4. In the container terminal, run `./gradlew bootRun`.
5. Open `http://localhost:8080/`. Press Ctrl+C in the terminal to stop the application.

Stop a separately running runtime container first with `podman stop srecore` on the host, so port 8080 is available. The development configuration forwards port 8080. After changing the development-container configuration, use **Dev Containers: Rebuild Container**.

### Fresh checkout

The `.devcontainer` directory is Git-ignored and is not supplied by a fresh checkout. Create a local configuration using **Dev Containers: Add Dev Container Configuration Files**, with a Java 25 development Dockerfile in `.devcontainer` and these settings:

```json
{
    "build": {
        "dockerfile": "Dockerfile"
    },
    "forwardPorts": [8080]
}
```

Keep the Java versions in the runtime Dockerfile, development Dockerfile, and Gradle toolchain aligned. Local configurations may include personal Git or signing mounts; their host paths must exist. Keep personal configuration and signing keys outside version control and application images. The backend’s `.references/development.md` contains its detailed local signing setup.

## Database and build context

Core uses the in-memory database URL `jdbc:h2:mem:srecore;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE`. The database lasts only for the Java process lifetime; restarting either containerized application starts a new database. A persistent database is outside the initial milestone. The planned [seed data](/core/tables/) establishes the starting records once initialization is implemented.

The root `.dockerignore` excludes Git metadata, development-container configuration, local references, build output, environment files, and logs from the application build context. Only the packaged JAR is copied from the build stage into the runtime image.
