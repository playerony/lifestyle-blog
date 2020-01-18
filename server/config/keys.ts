interface IKeys {
  databaseName?: string
  databaseUser?: string
  databasePassword?: string
  databaseServer?: string
  databasePort?: number

  hashSalt?: number
  appSecret?: string
  appPort?: string

  adminUrl?: string
}

const config: IKeys = {
  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseServer: process.env.DATABASE_SERVER,
  databasePort: Number(process.env.DATABASE_PORT),

  hashSalt: Number(process.env.HASH_SALT),
  appSecret: process.env.APP_SECRET,
  appPort: process.env.APP_PORT,

  adminUrl: process.env.ADMIN_URL
}

export default config
