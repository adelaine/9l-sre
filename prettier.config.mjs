/** @type {import('prettier').Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    overrides: [{ files: "*.astro", options: { parser: "astro" } }],
    // Diane's preference, shared with portfolio-astro.
    tabWidth: 4,
};
