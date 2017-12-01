module.exports = {
  parser: "babel-eslint",
  extends: [
    "plugin:flowtype/recommended",
    "airbnb",
    "prettier",
    "prettier/react",
  ],
  plugins: ["react", "flowtype", "prettier", "import"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
}
