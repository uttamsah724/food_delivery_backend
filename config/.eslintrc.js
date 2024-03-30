module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // Other rules...
    "no-console": "off", // Turn off the no-console rule, if desired
    "consistent-return": "off", // Optionally disable consistent-return if it's problematic
    "camelcase": "off", // Ignore camel case naming convention
  }
  
};
