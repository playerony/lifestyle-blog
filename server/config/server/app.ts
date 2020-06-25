import compression from 'compression'
import express, { Express } from 'express'
import { ApolloError } from 'apollo-server-express'

import keys from '@config/keys'
import apolloServer from './apolloServer'
import setResponseHeaders from './setResponseHeaders'

export default async (): Promise<Express> => {
  const app = express()

  try {
    app.set('port', keys.port)

    app.use(compression())
    setResponseHeaders(app)

    const server = await apolloServer()

    server.applyMiddleware({
      app,
      cors: {
        origin: [keys.adminUrl!, keys.clientUrl!],
        credentials: true
      }
    })
  } catch (e) {
    throw new ApolloError(e)
  }

  return app
}
