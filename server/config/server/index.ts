import initializeApp from './app'
;(async () => {
  const app = await initializeApp()

  app.listen(app.get('port'), () => {
    console.log(`\nServer listening on port ${app.get('port')}`)
    console.log('Press CTRL-C to stop\n')
  })
})()
