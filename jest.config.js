module.exports = {
  testEnvironment: 'jest-environment-jsdom-sixteen',
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules//(?!@astrouxds/rux-toggle)'],
  setupFiles: ['<rootDir>/tests/jest.setup.js'],
}
