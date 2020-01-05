import express from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'
import { sequelize } from '@server/config/sequelize'

const connectWithDatabase = async (): Promise<void> => {
  await sequelize.authenticate()
  await sequelize.sync()

  console.info(`Connected to ${sequelize.options.database} database.`)
}

export default async () => {
  const { appPort } = keys

  const app = express()
  app.set('port', appPort || 3000)

  try {
    await connectWithDatabase()

    const server = await apolloServer()

    server.applyMiddleware({ app })
  } catch (e) {
    console.warn(e.toString())
  }

  return app
}
