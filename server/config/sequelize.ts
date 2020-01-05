import { Sequelize } from 'sequelize-typescript'

import * as models from '../model'

import keys from '@config/keys'

export const sequelize = new Sequelize({
  database: keys.databaseName,
  dialect: 'postgres',
  username: keys.databaseUser,
  password: keys.databasePassword,
  storage: '',
  modelPaths: Object.keys(models),
  host: keys.databaseServer,
  port: keys.databasePort,
  dialectOptions: {
    encrypt: true,
    requestTimeout: 50000,
    packetSize: 32768
  }
})
