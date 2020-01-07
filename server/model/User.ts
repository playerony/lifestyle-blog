import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/sequelize'

export class UserAddModel {
  login!: string
  password!: string
}

export class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    login: DataTypes.STRING(50),
    password: DataTypes.STRING(100)
  },
  { sequelize }
)
