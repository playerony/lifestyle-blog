import compression from 'compression'
import express, { Express } from 'express'
import { ApolloError } from 'apollo-server-express'

import keys from '@config/keys'
import apolloServer from './apolloServer'

export default async (): Promise<Express> => {
  const app = express()

  try {
    app.set('port', keys.serverPort)

    app.use(compression())

    const server = await apolloServer()

    server.applyMiddleware({
      app,
      cors: {
        origin: keys.adminUrl,
        credentials: true
      }
    })
  } catch (e) {
    throw new ApolloError(e)
  }

  return app
}
