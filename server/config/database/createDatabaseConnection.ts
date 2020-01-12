import keys from '@config/keys'
import { sequelize } from './sequelize'

export default async () => {
  await sequelize.authenticate()

  console.info(`Connected to ${keys.databaseName} database.`)
}
