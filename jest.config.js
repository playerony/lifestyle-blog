module.exports = {
  moduleFileExtensions: ['js', 'vue'],
  testMatch: ['**/*.spec.(js|vue)'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '@page/(.*)': '<rootDir>/page/$1',
    '@style/(.*)': '<rootDir>/style/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@service/(.*)': '<rootDir>/service/$1',
    '@component/(.*)': '<rootDir>/component/$1'
  }
}
