import { sequelize } from './sequelize'

export default async () => {
  await sequelize.authenticate()
}
