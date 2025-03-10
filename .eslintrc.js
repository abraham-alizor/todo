module.exports = {
  env: {
    browser: true,
    es2022: true, // Updated to es2022
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-use-before-define": "off",
        "unicorn/require-post-message-target-origin": "off",
      },
    },
    {
      files: "**/*.tsx",
      rules: {
        "global-require": "off",
        "prefer-destructuring": "off",
        "unicorn/prefer-module": "off",
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      files: "**/*.{test,spec}.{ts,tsx}",
      rules: {
        "import/no-extraneous-dependencies": [
          "error",
          {
            devDependencies: true,
          },
        ],
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "prettier",
    "import",
    "unicorn",
    "simple-import-sort",
    "sort-keys-fix",
    "unused-imports",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "eol-last": ["error", "always"],
    "no-param-reassign": ["error", { props: false }],
    "import/extensions": "off",
    "import/no-default-export": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/destructuring-assignment": "off",

    "react/function-component-definition": "off",
    "react/jsx-sort-props": [
      "error",
      {
        ignoreCase: true,
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/style-prop-object": "off",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "sort-keys-fix/sort-keys-fix": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    "no-console": "error",
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          args: false,
          params: false,
          props: false,
          ref: false,
        },
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["storybook/**", "stories/**"],
      },
    ],
  },
  settings: {
    react: {
      createClass: "createReactClass",
      fragment: "Fragment",
      pragma: "React",
      version: "detect",
    },
  },
};
