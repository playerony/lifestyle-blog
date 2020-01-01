import { Sequelize } from 'sequelize-typescript'
import path from 'path'

import keys from '@config/keys'

const modelsPath = path.join(__dirname, '../model')

export default () =>
  new Sequelize({
    database: keys.databaseName,
    dialect: 'postgres',
    username: keys.databaseUser,
    password: keys.databasePassword,
    storage: '',
    modelPaths: [modelsPath],
    host: keys.databaseServer,
    port: keys.databasePort,
    dialectOptions: {
      encrypt: true,
      requestTimeout: 50000,
      packetSize: 32768
    }
  })
