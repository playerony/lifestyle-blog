import { Model, DataTypes } from 'sequelize'

import { Article } from './Article'

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
      type: DataTypes.INTEGER,
      references: {
        key: 'articleId',
        model: Article
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    ipAddress: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        isIP: true,
        notEmpty: true
      }
    }
  },
  { sequelize }
)
