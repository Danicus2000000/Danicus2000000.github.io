import js from '@eslint/js'
import globals from 'globals'
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  { ignores: ["dist", "src/**/*.tsx"] },
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      vue,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...vue.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      "vue/no-v-html": "off",
    },
  },
];
