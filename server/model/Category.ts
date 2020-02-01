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
    name: DataTypes.STRING(10)
  },
  { sequelize }
)
