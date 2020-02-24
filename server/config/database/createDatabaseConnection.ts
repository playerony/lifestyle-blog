import keys from '@config/keys'
import { sequelize } from './sequelize'

export default async (): Promise<void> => {
  await sequelize.authenticate()

  console.info(`Connected to ${keys.databaseName} database.`)
}
