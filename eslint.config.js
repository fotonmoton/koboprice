import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  {    
    ignores: ["dist"]  
  },
  {
    ...js.configs.recommended,
    ...eslintPluginPrettierRecommended,
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        l: "readonly",
      },
    },
  },
];
