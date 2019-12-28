interface IKeys {
  databaseName?: string
  databaseUser?: string
  databasePassword?: string
  databaseServer?: string
  databasePort?: number
}

const config: IKeys = {
  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseServer: process.env.DATABASE_SERVER,
  databasePort: Number(process.env.DATABASE_PORT)
}

export default config
