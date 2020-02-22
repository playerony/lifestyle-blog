import React from 'react'

import ArticleList from './ArticleList'
import Container from '@component/common/Container'

import ICategory from '@type/category/ICategory'
import { IDashboardProps } from './Dashboard.type'
import IArticleList from '@type/article/IArticleList'

import useCategoryList from '@hook/category/useCategoryList'

const sortByCreatedAt = (firstArticle: IArticleList, secondArticle: IArticleList): number =>
  new Date(secondArticle.createdAt!).getDate() - new Date(firstArticle.createdAt!).getDate()

const sortByTotalVisitor = (firstArticle: IArticleList, secondArticle: IArticleList): number =>
  secondArticle.totalVisitor! - firstArticle.totalVisitor!

const sortByTodayVisitor = (firstArticle: IArticleList, secondArticle: IArticleList): number =>
  secondArticle.todayVisitor! - firstArticle.todayVisitor!

const articleListByCategory = (articleList: IArticleList[], category: string): JSX.Element | null => {
  const filteredArticleList = articleList.filter(({ categoryList = [] }) =>
    categoryList.find(({ name }) => name === category))

  if (filteredArticleList.length < 3) {
    return null
  }

  return <ArticleList label={category} articleList={filteredArticleList} />
}

const Dashboard = ({ articleList }: IDashboardProps): JSX.Element => {
  const { data: categoryList } = useCategoryList()

  const renderCategorySectionList = (): JSX.Element[] => {
    if (!categoryList) {
      return []
    }

    return categoryList.map(({ name }: ICategory) =>
      articleListByCategory(articleList, name!)
    )
  }

  const renderContent = (): JSX.Element[] => ([
    <ArticleList label="Newest" articleList={articleList.sort(sortByCreatedAt)} />,
    <ArticleList label="Most Viewed - all time" articleList={articleList.sort(sortByTotalVisitor)} />,
    <ArticleList label="Most Viewed - today" articleList={articleList.sort(sortByTodayVisitor)} />,
    ...renderCategorySectionList()
  ])

  return (
    <Container>
      {React.Children.toArray(renderContent())}
    </Container>
  )
}

export default Dashboard
