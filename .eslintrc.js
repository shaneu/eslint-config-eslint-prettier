module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["react", "prettier", "import"],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
