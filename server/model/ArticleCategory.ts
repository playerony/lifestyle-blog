import { Model, DataTypes } from 'sequelize'

import { sequelize } from '@config/database/sequelize'

import { Article } from './Article'
import { Category } from './Category'

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
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { sequelize }
)

Article.belongsToMany(Category, {
  as: 'categoryList',
  through: ArticleCategory,
  foreignKey: 'articleId',
  otherKey: 'categoryId'
})

Category.belongsToMany(Article, {
  as: 'articleList',
  through: ArticleCategory,
  foreignKey: 'categoryId',
  otherKey: 'articleId'
})
