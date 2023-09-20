import { Config } from 'jest'

process.env.TZ = 'UTC'
const config: Config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/dtos/**',
    // '!**/coverage/**',
    // '!**/utils/test/**',
    // '!**/constants/**',
    // '!**/libs/query-client.ts',
  ],

  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

module.exports = config
