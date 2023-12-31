import { Config } from 'jest'

process.env.TZ = 'UTC'
const config: Config = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@gluestack-ui/themed|@legendapp)',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/dtos/**',
    '!**/src/assets/**',
    '!**/src/utils/test/**',
  ],

  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

module.exports = config
