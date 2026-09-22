import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier/flat";

export default defineConfig(
    globalIgnores([
        "**/node_modules/**",
        "**/dist/**",
        "**/.astro/**",
        "**/.wrangler/**",
        "**/.agents/**",
        "**/.references/**",
        "**/coverage/**",
    ]),
    {
        files: ["**/*.{js,mjs,cjs,ts,astro}"],
        extends: [js.configs.recommended],
        linterOptions: { reportUnusedDisableDirectives: "error" },
    },
    {
        files: ["**/*.{ts,astro}"],
        extends: [tseslint.configs.recommended],
        rules: { "@typescript-eslint/consistent-type-imports": "error" },
    },
    {
        files: ["**/*.ts"],
        // Astro's extracted scripts are virtual files, outside the TS project.
        ignores: ["**/*.astro/**"],
        extends: [tseslint.configs.recommendedTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        files: ["*.{js,mjs,cjs}", "scripts/**/*.{js,mjs,cjs}"],
        languageOptions: { globals: globals.node },
    },
    ...astro.configs.recommended,
    ...astro.configs["jsx-a11y-recommended"],
    // Disable conflicting stylistic rules so Prettier controls formatting.
    prettier,
);
