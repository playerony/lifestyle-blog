import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/database/sequelize'

export class Log extends Model {}

Log.init(
  {
    logId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    level: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        max: 10,
        notEmpty: true
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  { sequelize }
)
