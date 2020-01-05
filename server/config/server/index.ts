;(async (): Promise<void> => {
  const app = await require('./app').default()

  app.listen(app.get('port'), () => {
    console.log(`\nServer listening on port ${app.get('port')}`)
    console.log('Press CTRL-C to stop\n')
  })
})()
