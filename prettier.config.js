/**
 * This file should not be changed at all unless we are
 * changing the code style across all repositories.
 */

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 120,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    },
    {
      files: '*.handlebars',
      options: {
        parser: 'glimmer',
      },
    },
  ],
};
