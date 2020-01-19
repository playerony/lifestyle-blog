interface IKeys {
  nodeEnv?: string

  databaseName?: string
  databaseUser?: string
  databasePassword?: string
  databaseServer?: string
  databasePort?: number

  hashSalt?: number
  appSecret?: string
  serverPort?: string

  adminUrl?: string
}

const config: IKeys = {
  nodeEnv: process.env.NODE_ENV || 'development',

  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseServer: process.env.DATABASE_SERVER,
  databasePort: Number(process.env.DATABASE_PORT),

  hashSalt: Number(process.env.HASH_SALT),
  appSecret: process.env.APP_SECRET,
  serverPort: process.env.SERVER_PORT,

  adminUrl: process.env.ADMIN_URL
}

export default config
