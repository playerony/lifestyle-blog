import checkEnvKeys from './checkEnvKeys'
import database from './database'
import server from './server'
;(async () => {
  try {
    checkEnvKeys()
    await database()
    await server()
  } catch (e) {
    console.error(e.toString())
  }
})()
