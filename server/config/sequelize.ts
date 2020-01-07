import { Sequelize } from 'sequelize'

import keys from '@config/keys'

export const sequelize = new Sequelize({
  database: keys.databaseName,
  dialect: 'postgres',
  username: keys.databaseUser,
  password: keys.databasePassword,
  storage: ':memory:',
  host: keys.databaseServer,
  port: keys.databasePort
})
