import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/database/sequelize'

import { Article } from './Article'

export class Comment extends Model {}

Comment.init(
  {
    commentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    parentCommentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creator: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize
  }
)

Comment.belongsTo(Article, { as: 'article', foreignKey: 'articleId' })
