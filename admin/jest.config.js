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
    '@asset/(.*)': '<rootDir>/../asset/*',
    '@admin/(.*)': '<rootDir>/$1',
    '@hook/(.*)': '<rootDir>/hook/$1',
    '@page/(.*)': '<rootDir>/page/$1',
    '@style/(.*)': '<rootDir>/style/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@service/(.*)': '<rootDir>/service/$1',
    '@utility/(.*)': '<rootDir>/utility/$1',
    '@component/(.*)': '<rootDir>/component/$1'
  }
}
