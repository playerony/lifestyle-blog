import { Sequelize } from 'sequelize'

import keys from '@config/keys'

export const sequelize = new Sequelize({
  dialectOptions: {
    ssl: keys.nodeEnv !== 'development'
  },
  storage: ':memory:',
  dialect: 'postgres',
  port: keys.databasePort,
  host: keys.databaseServer,
  database: keys.databaseName,
  username: keys.databaseUser,
  password: keys.databasePassword
})
