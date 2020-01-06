import express, { Express } from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'
import { sequelize } from '@config/sequelize'

import hasAllValuesDefined, { IInputData } from '@utility/hasAllValuesDefined'

const checkEnvKeys = (): void => {
  const result = hasAllValuesDefined(keys as IInputData)
  if (!result) {
    throw Error('Not all environment variables have been defined.')
  }

  console.info('Environment variables have been defined successfully.')
}

const connectWithDatabase = async (): Promise<void> => {
  await sequelize.authenticate()
  await sequelize.sync()

  console.info(`Connected to ${sequelize.options.database} database.`)
}

export default async (): Promise<Express> => {
  checkEnvKeys()

  const app = express()
  app.set('port', keys.appPort)

  try {
    await connectWithDatabase()

    const server = await apolloServer()

    server.applyMiddleware({ app })
  } catch (e) {
    console.warn(e.toString())
  }

  return app
}
