import express, { Express } from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'

export default async (): Promise<Express> => {
  const app = express()

  try {
    app.set('port', keys.appPort)

    const server = await apolloServer()

    server.applyMiddleware({
      app,
      cors: {
        origin: 'http://localhost:8080',
        credentials: true
      }
    })
  } catch (e) {
    throw new Error(e)
  }

  return app
}
