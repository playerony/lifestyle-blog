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
    level: DataTypes.STRING(10),
    message: DataTypes.STRING(3000)
  },
  { sequelize }
)
