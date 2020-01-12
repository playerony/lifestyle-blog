import express, { Express } from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'

export default async (): Promise<Express> => {
  const app = express()

  try {
    app.set('port', keys.appPort)

    const server = await apolloServer()

    server.applyMiddleware({ app })
  } catch (e) {
    console.error(e.toString())
  }

  return app
}
