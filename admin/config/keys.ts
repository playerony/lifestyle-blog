interface IKeys {
  nodeEnv?: string
  serverUrl?: string
  cryptoKey?: string
  jwtPrefix?: string
}

const config: IKeys = {
  nodeEnv: process.env.NODE_ENV || 'development',
  serverUrl: process.env.SERVER_URL,
  cryptoKey: process.env.CRYPTO_KEY,
  jwtPrefix: process.env.JWT_PREFIX
}

export default config
