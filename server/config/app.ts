import { ApolloError } from 'apollo-server-express'

import server from './server'
import database from './database'
;(async (): Promise<void> => {
  try {
    await database()
    await server()
  } catch (e) {
    throw new ApolloError(e)
  }
})()
