import initializeApp from './app'

export default async (): Promise<void> => {
  const app = await initializeApp()

  app.listen(app.get('port'), () => {
    console.warn(`\nServer listening on port ${app.get('port')}`)
    console.warn('Press CTRL-C to stop\n')
  })
}
