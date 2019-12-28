import * as dotenv from 'dotenv'
dotenv.config()

import initApplication from './app'

;(async () => {
  const app = await initApplication()

  app.listen(app.get('port'), () => {
    console.log(`🚀 Server listening on port ${app.get('port')}`)
  })
})()
