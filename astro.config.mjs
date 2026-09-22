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
                    items: [{ autogenerate: { directory: "getting-started" } }],
                },
                {
                    label: "Core",
                    items: [
                        "core",
                        "core/domain-model",
                        "core/datadiagram",
                        "core/infrastructure",
                        {
                            label: "API",
                            items: [
                                { autogenerate: { directory: "core/api" } },
                            ],
                        },
                        {
                            label: "Tables",
                            items: [
                                { autogenerate: { directory: "core/tables" } },
                            ],
                        },
                        {
                            label: "Status",
                            items: [
                                { autogenerate: { directory: "core/status" } },
                            ],
                        },
                        {
                            label: "Mock",
                            items: [
                                { autogenerate: { directory: "core/mock" } },
                            ],
                        },
                    ],
                },
                {
                    label: "ClientJ",
                    items: [{ autogenerate: { directory: "client-j" } }],
                },
                {
                    label: "ClientL",
                    items: [{ autogenerate: { directory: "client-l" } }],
                },
                {
                    label: "Comparisons",
                    items: [{ autogenerate: { directory: "comparisons" } }],
                },
                {
                    label: "Reference",
                    items: [{ autogenerate: { directory: "reference" } }],
                },
                {
                    label: "Appendix: The 9L-SRE World",
                    items: [{ autogenerate: { directory: "appendix" } }],
                },
            ],
        }),
    ],
});
