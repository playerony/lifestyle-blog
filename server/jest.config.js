module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    '@server/(.*)': '<rootDir>/$1',
    '@type/(.*)': '<rootDir>/type/$1',
    '@model/(.*)': '<rootDir>/model/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@service/(.*)': '<rootDir>/service/$1',
    '@utility/(.*)': '<rootDir>/utility/$1',
    '@mapping/(.*)': '<rootDir>/mapping/$1',
    '@resolver/(.*)': '<rootDir>/resolver/$1'
  },
  setupFiles: ['./config/jestSetupFile.ts']
}
