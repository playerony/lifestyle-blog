module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/*.test.(ts|js|tsx)'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/config/enzyme.ts'],
  moduleNameMapper: {
    '@admin/(.*)': '<rootDir>/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@component/(.*)': '<rootDir>/component/$1',
    '@style/(.*)': '<rootDir>/style/$1'
  }
}
