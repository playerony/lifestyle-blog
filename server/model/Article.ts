import { Model, DataTypes } from 'sequelize'

import { User } from './User'
import { Image } from './Image'

import { sequelize } from '@config/database/sequelize'

export class Article extends Model {}

Article.init(
  {
    articleId: {
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
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        key: 'imageId',
        model: Image
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    title: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
      validate: {
        max: 30,
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        max: 100,
        notEmpty: true
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 160
      }
    }
  },
  { sequelize }
)

Article.belongsTo(User, { as: 'user', foreignKey: 'userId' })
Article.belongsTo(Image, { as: 'image', foreignKey: 'imageId' })
