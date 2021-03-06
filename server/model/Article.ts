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
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        max: 40,
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
      allowNull: false
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    scopes: {
      withImage: {
        include: ['image']
      },
      withCategoryList: {
        include: ['categoryList']
      }
    }
  }
)

Article.belongsTo(User, { as: 'user', foreignKey: 'userId' })
Article.belongsTo(Image, { as: 'image', foreignKey: 'imageId' })
