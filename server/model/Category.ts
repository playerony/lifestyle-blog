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
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  },
  { sequelize }
)
