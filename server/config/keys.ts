interface IKeys {
  nodeEnv?: string

  databasePort?: number
  databaseName?: string
  databaseUser?: string
  databaseServer?: string
  databasePassword?: string

  port?: string
  hashSalt?: number
  jwtPrefix?: string
  appSecret?: string
  jwtExpiresIn?: number

  adminUrl?: string
  clientUrl?: string

  cloudinaryName?: string
  cloudinaryPublicKey?: string
  cloudinarySecretKey?: string
}

const config: IKeys = {
  nodeEnv: process.env.NODE_ENV || 'development',

  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databaseServer: process.env.DATABASE_SERVER,
  databasePort: Number(process.env.DATABASE_PORT),
  databasePassword: process.env.DATABASE_PASSWORD,

  port: process.env.PORT || '8080',
  jwtPrefix: process.env.JWT_PREFIX,
  appSecret: process.env.APP_SECRET,
  hashSalt: Number(process.env.HASH_SALT),
  jwtExpiresIn: Number(process.env.JWT_EXPIRES_IN),

  adminUrl: process.env.ADMIN_URL,
  clientUrl: process.env.CLIENT_URL,

  cloudinaryName: process.env.CLOUDINARY_NAME,
  cloudinaryPublicKey: process.env.CLOUDINARY_PUBLIC_KEY,
  cloudinarySecretKey: process.env.CLOUDINARY_SECRET_KEY
}

export default config
