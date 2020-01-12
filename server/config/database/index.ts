import createDatabaseConnection from './createDatabaseConnection'
import synchronizeModel from './synchronizeModel'

export default async (): Promise<void> => {
  await createDatabaseConnection()
  await synchronizeModel()
}
