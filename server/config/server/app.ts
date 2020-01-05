import express from 'express'

import apolloServer from './apolloServer'
import hasAllValuesDefined from '@utility/hasAllValuesDefined'

import { sequelize } from '@config/sequelize'
import keys from '@config/keys'

const checkEnvKeys = (): void => {
  const result = hasAllValuesDefined(keys as any)
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

export default async () => {
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
