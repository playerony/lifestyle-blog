import express from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'
import createDB from '@database/config/database'

const connectWithDatabase = async (): Promise<void> => {
  const database = await createDB()
  await database.authenticate()

  console.info(`Connected to ${database.options.database} database.`)
}

export default async () => {
  const { databasePort } = keys

  const app = express()
  app.set('port', databasePort || 3000)

  try {
    await connectWithDatabase()

    const server = await apolloServer()

    server.applyMiddleware({ app })
  } catch (e) {
    console.warn(e.toString())
  }

  return app
}
