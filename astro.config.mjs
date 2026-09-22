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
                        "core/datadiagram",
                        {
                            label: "API",
                            items: [
                                "core/api/auth",
                                "core/api/workflow",
                                "core/api/issues",
                                "core/api/comments",
                            ],
                        },
                        {
                            label: "Tables",
                            items: [
                                "core/tables",
                                "core/tables/workspace",
                                "core/tables/issue",
                                "core/tables/comment",
                                "core/tables/status",
                                "core/tables/interval",
                                "core/tables/user",
                                "core/tables/provider",
                                "core/tables/user-identity",
                                "core/tables/role",
                                "core/tables/user-role",
                                "core/tables/attachment",
                            ],
                        },
                        {
                            label: "Status",
                            items: [
                                "core/status",
                                "core/status/incident",
                                "core/status/repair",
                            ],
                        },
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
