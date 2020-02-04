import server from './server'
import database from './database'
import checkEnvironment from './checkEnvironment'

;(async () => {
  try {
    checkEnvironment()

    await database()
    await server()
  } catch (e) {
    throw Error(e)
  }
})()
