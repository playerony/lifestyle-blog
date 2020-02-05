import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/database/sequelize'

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
    login: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        min: 3,
        max: 50
      }
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        min: 5,
        max: 100
      }
    }
  },
  { sequelize }
)
