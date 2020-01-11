import configureDatabase from '@config/database'
import initializeApp from './app'
import { info } from '@utility/logger'
;(async (): Promise<void> => {
  await configureDatabase()

  const app = await initializeApp()

  app.listen(app.get('port'), () => {
    info(`Server listening on port ${app.get('port')}`)
    info('Press CTRL-C to stop\n')
  })
})()
