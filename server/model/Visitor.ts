import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/database/sequelize'

export class Visitor extends Model {}

Visitor.init(
  {
    visitorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    articleId: {
      type: DataTypes.INTEGER
    },
    ipAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isIP: true,
        notEmpty: true
      }
    },
    userAgent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { sequelize }
)
