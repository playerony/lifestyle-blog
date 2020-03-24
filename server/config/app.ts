import { ApolloError } from 'apollo-server-express'

import server from './server'
import database from './database'
import checkEnvironment from './checkEnvironment'
;(async (): Promise<void> => {
  try {
    checkEnvironment()

    await database()
    await server()
  } catch (e) {
    throw new ApolloError(e)
  }
})()
