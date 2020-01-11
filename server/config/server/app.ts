import express, { Express } from 'express'

import keys from '@config/keys'
import apolloServer from './apolloServer'

import { info, error } from '@utility/logger'
import hasAllValuesDefined, { IInputData } from '@utility/hasAllValuesDefined'

const checkEnvKeys = (): void => {
  const result = hasAllValuesDefined(keys as IInputData)
  if (!result) {
    throw Error('Not all environment variables have been defined.')
  }

  info('Environment variables have been defined successfully.')
}

export default async (): Promise<Express> => {
  const app = express()

  try {
    checkEnvKeys()
    app.set('port', keys.appPort)

    const server = await apolloServer()

    server.applyMiddleware({ app })
  } catch (e) {
    error(e.toString())
  }

  return app
}
