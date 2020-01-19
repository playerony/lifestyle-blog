interface IKeys {
  nodeEnv?: string
  serverUrl?: string
}

const config: IKeys = {
  nodeEnv: process.env.NODE_ENV || 'development',
  serverUrl: process.env.SERVER_URL
}

export default config
