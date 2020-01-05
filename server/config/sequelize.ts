import { Sequelize } from 'sequelize-typescript'

import keys from '@config/keys'

export const sequelize = new Sequelize({
  database: keys.databaseName,
  dialect: 'postgres',
  username: keys.databaseUser,
  password: keys.databasePassword,
  storage: '',
  host: keys.databaseServer,
  port: keys.databasePort
})
