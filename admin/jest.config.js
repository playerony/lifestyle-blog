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
  setupFilesAfterEnv: [
    '<rootDir>/config/enzyme.ts',
    '<rootDir>/config/testSetup.ts'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/fileMock.ts',

    '@asset/(.*)': '<rootDir>/../asset/*',
    '@admin/(.*)': '<rootDir>/$1',
    '@type/(.*)': '<rootDir>/type/$1',
    '@hook/(.*)': '<rootDir>/hook/$1',
    '@page/(.*)': '<rootDir>/page/$1',
    '@style/(.*)': '<rootDir>/style/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@context/(.*)': '<rootDir>/context/$1',
    '@service/(.*)': '<rootDir>/service/$1',
    '@utility/(.*)': '<rootDir>/utility/$1',
    '@component/(.*)': '<rootDir>/component/$1',
    '@transformator/(.*)': '<rootDir>/transformator/$1'
  }
}
