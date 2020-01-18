import checkEnvironment from './checkEnvironment'
import database from './database'
import server from './server'
;(async () => {
  try {
    checkEnvironment()

    await database()
    await server()
  } catch (e) {
    throw Error(e)
  }
})()
