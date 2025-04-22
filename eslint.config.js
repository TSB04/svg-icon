import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // JS support
  {
    files: ["**/*.js", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // TypeScript support
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  // Prettier integration (applies to all files)
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules, // désactive les règles conflictuelles
      "prettier/prettier": "error", // affiche une erreur ESLint si le formatage Prettier n'est pas respecté
    },
  },
];
