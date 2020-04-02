import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/database/sequelize'

export class Category extends Model {}

Category.init(
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
      validate: {
        max: 20,
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: {
        max: 100,
        notEmpty: true
      }
    }
  },
  { sequelize }
)