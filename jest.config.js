module.exports = {

  // 生成测试覆盖率报告
  collectCoverage: true,

  collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],

  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/'
    // '<rootDir>/src/**/__tests__/**/*.[jt]s',
    // '<rootDir>/src/**/*.(spec|test).[tj]s'
  ],

  coverageReporters: ['text', 'lcov'],

  globals: {
    __DEV__: false
  },

  moduleFileExtensions: ['ts', 'js', 'json'],

  testEnvironment: 'jest-environment-jsdom',

  testMatch: [
    // '<rootDir>/src/**/__tests__/**/*.[jt]s',
    '<rootDir>/src/**/*.(spec|test).(ts|tsx)'
  ],

  testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
}
