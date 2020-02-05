import { Model, DataTypes } from 'sequelize'

import { User } from './User'

import { sequelize } from '@config/database/sequelize'

export class Image extends Model {}

Image.init(
  {
    imageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'userId',
        model: User
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    filename: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
      validate: {
        max: 100,
        notEmpty: true
      }
    }
  },
  { sequelize }
)

Image.belongsTo(User, { as: 'user', foreignKey: 'userId' })
