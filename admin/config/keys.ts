interface IKeys {
  nodeEnv?: string
  serverUrl?: string
  cryptoKey?: string
}

const config: IKeys = {
  nodeEnv: process.env.NODE_ENV || 'development',
  serverUrl: process.env.SERVER_URL,
  cryptoKey: process.env.CRYPTO_KEY
}

export default config
