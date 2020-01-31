import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@server/config/database/sequelize'

export class Image extends Model {}

Image.init(
  {
    imageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    filename: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  },
  { sequelize }
)
