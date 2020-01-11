import createDatabaseConnection from './createDatabaseConnection'
import synchronizeModel from './synchronizeModel'

export default async () => {
  await createDatabaseConnection()
  await synchronizeModel()
}
