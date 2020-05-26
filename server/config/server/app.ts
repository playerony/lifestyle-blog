import helmet from 'helmet'
import compression from 'compression'
import express, { Express } from 'express'
import { ApolloError } from 'apollo-server-express'

import keys from '@config/keys'
import apolloServer from './apolloServer'

export default async (): Promise<Express> => {
  const app = express()

  console.warn(keys)

  try {
    app.set('port', keys.serverPort)

    app.use(helmet())
    app.use(compression())

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
