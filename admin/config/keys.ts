interface IKeys {
  nodeEnv?: string
  serverUrl?: string
  cryptrKey?: string
}

const config: IKeys = {
  nodeEnv: process.env.NODE_ENV || 'development',
  serverUrl: process.env.SERVER_URL,
  cryptrKey: process.env.CRYPTR_KEY
}

export default config
