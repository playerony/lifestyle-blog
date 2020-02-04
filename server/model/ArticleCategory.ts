import { Model, DataTypes } from 'sequelize'

import { Article } from './Article'
import { Category } from './Category'

import { sequelize } from '@config/database/sequelize'

export class ArticleCategory extends Model {}

ArticleCategory.init(
  {
    articleCategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Article,
        key: 'articleId'
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'categoryId'
      }
    }
  },
  { sequelize }
)

ArticleCategory.hasMany(Article, {
  as: 'articles',
  foreignKey: 'articleId'
})

ArticleCategory.hasMany(Category, {
  as: 'categories',
  foreignKey: 'categoryId'
})
