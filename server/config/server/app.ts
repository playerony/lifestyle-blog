import express, { Express } from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'

export default async (): Promise<Express> => {
  const app = express()

  try {
    app.set('port', keys.serverPort)

    const server = await apolloServer()

    server.applyMiddleware({
      app,
      cors: {
        origin: keys.adminUrl,
        credentials: true
      }
    })
  } catch (e) {
    throw Error(e)
  }

  return app
}
