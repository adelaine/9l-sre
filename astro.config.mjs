import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
    site: "https://forge.ctrlcatworks.com",
    trailingSlash: "always",
    integrations: [
        starlight({
            title: "9L-SRE",
            sidebar: [
                { label: "Home", slug: "" },
                {
                    label: "Getting started",
                    items: [
                        "getting-started/overview",
                        "getting-started/architecture",
                        "getting-started/local-development",
                    ],
                },
                {
                    label: "Core",
                    items: [
                        "core",
                        "core/domain-model",
                        {
                            label: "API",
                            items: [
                                { label: "Overview", slug: "core/api" },
                                "core/api/datadiagram",
                                "core/api/status-transitions",
                                {
                                    label: "Tables",
                                    items: [
                                        "core/api/schema",
                                        "core/api/schema/workspace",
                                        "core/api/schema/issue",
                                        "core/api/schema/comment",
                                        "core/api/schema/status",
                                        "core/api/schema/interval",
                                        "core/api/schema/user",
                                        "core/api/schema/role",
                                        "core/api/schema/user-role",
                                        "core/api/schema/attachment",
                                    ],
                                },
                            ],
                        },
                        "core/data-and-reset",
                    ],
                },
                {
                    label: "ClientJ",
                    items: [
                        "client-j",
                        "client-j/user-flows",
                        "client-j/application-structure",
                        "client-j/core-integration",
                    ],
                },
                {
                    label: "ClientL",
                    items: [
                        "client-l",
                        "client-l/user-flows",
                        "client-l/application-structure",
                        "client-l/core-integration",
                    ],
                },
                {
                    label: "Comparisons",
                    items: [
                        "comparisons/clients",
                        "comparisons/implementation-notes",
                    ],
                },
                { label: "Reference", items: ["reference/glossary"] },
                {
                    label: "Appendix: The 9L-SRE World",
                    items: ["appendix", "appendix/agent-roster"],
                },
            ],
        }),
    ],
});
