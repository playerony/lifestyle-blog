import * as express from 'express'

import graphql from './graphql'

import createDB from './database/config/database'

export default async () => {
  const { PORT } = process.env

  const app = express()
  app.set('port', PORT || 3000)

  try {
    const database = await createDB()
    await database.authenticate()
    console.info(`🚀 Connected to ${database.options.database} database.`)

    const server = await graphql()

    server.applyMiddleware({ app })
  } catch (e) {
    console.warn(e.toString())
  }

  return app
}
