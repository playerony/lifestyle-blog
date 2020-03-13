interface IKeys {
  nodeEnv?: string
  serverUrl?: string
  cryptoKey?: string
  jwtPrefix?: string
}

const config: IKeys = {
  cryptoKey: process.env.CRYPTO_KEY,
  serverUrl: process.env.SERVER_URL,
  jwtPrefix: process.env.JWT_PREFIX,
  nodeEnv: process.env.NODE_ENV || 'development'
}

export default config
