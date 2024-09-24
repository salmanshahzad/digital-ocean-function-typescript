import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    {
        files: ["src/**/*.ts"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
];
