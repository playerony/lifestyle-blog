import React from 'react'

import ArticleList from './ArticleList'
import Container from '@component/common/Container'

import ICategory from '@type/category/ICategory'
import { IDashboardProps } from './Dashboard.type'
import IArticleList from '@type/article/IArticleList'

import useCategoryList from '@hook/category/useCategoryList'

const renderArticleListSortedByCategory = (articleList: IArticleList[], category: string): JSX.Element | null => {
  const filteredArticleList = articleList.filter(({ categoryList = [] }) =>
    categoryList.find(({ name }) => name === category))

  if (filteredArticleList.length < 3) {
    return null
  }

  return <ArticleList label={category} articleList={filteredArticleList} />
}

const renderArticleListSortedByCreatedAt = (articleList: IArticleList[]): JSX.Element => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy.sort((a, b) =>
    new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime())

  return <ArticleList label="Newest" articleList={result.reverse()} />
}

const renderArticleListSortedByTotalVisitor = (articleList: IArticleList[]): JSX.Element => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy.sort((a, b) => b.totalVisitor! - a.totalVisitor!)

  return <ArticleList label="Most Viewed - all time" articleList={result} />
}

const renderArticleListSortedByTodayVisitor = (articleList: IArticleList[]): JSX.Element => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy.sort((a, b) => b.todayVisitor! - a.todayVisitor!)

  return <ArticleList label="Most Viewed - today" articleList={result} />
}

const Dashboard = ({ articleList }: IDashboardProps): JSX.Element => {
  const { data: categoryList } = useCategoryList()

  const renderCategorySectionList = (): JSX.Element[] => {
    if (!categoryList) {
      return []
    }

    return categoryList.map(({ name }: ICategory) =>
      renderArticleListSortedByCategory(articleList, name!)
    ).filter(Boolean) as JSX.Element[]
  }

  const renderContent = (): JSX.Element[] => ([
    renderArticleListSortedByCreatedAt(articleList),
    renderArticleListSortedByTotalVisitor(articleList),
    renderArticleListSortedByTodayVisitor(articleList),
    ...renderCategorySectionList()
  ])

  return (
    <Container>
      {React.Children.toArray(renderContent())}
    </Container>
  )
}

export default Dashboard
