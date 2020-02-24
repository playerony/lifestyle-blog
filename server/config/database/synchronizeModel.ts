import { sequelize } from './sequelize'

export default async (): Promise<void> => {
  await sequelize.sync()
}
