module.exports = {
  testMatch: ['**/*.spec.(js|vue)'],
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/fileMock.js',

    '@page/(.*)': '<rootDir>/page/$1',
    '@style/(.*)': '<rootDir>/style/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@graphql/(.*)': '<rootDir>/graphql/$1',
    '@service/(.*)': '<rootDir>/service/$1',
    '@utility/(.*)': '<rootDir>/utility/$1',
    '@component/(.*)': '<rootDir>/component/$1',
    '@transformator/(.*)': '<rootDir>/transformator/$1'
  }
}
