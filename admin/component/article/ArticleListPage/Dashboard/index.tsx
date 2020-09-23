import React from 'react'

import ArticleList from './ArticleList'
import Container from '@component/common/Container'
import { withErrorBoundary } from '@component/utility/ErrorBoundary'

import ICategory from '@type/category/ICategory'
import { IDashboardProps } from './Dashboard.type'
import IArticleList from '@type/article/IArticleList'

import useCategoryList from '@hook/category/useCategoryList'

const renderArticleListSortedByCategory = (
  articleList: IArticleList[],
  category: string
): JSX.Element | null => {
  const filteredArticleList = articleList.filter(({ categoryList = [] }) =>
    categoryList.find(({ name }) => name === category)
  )

  if (filteredArticleList.length < 3) {
    return null
  }

  return <ArticleList label={category} articleList={filteredArticleList} />
}

const renderArticleListSortedByCreatedAt = (
  articleList: IArticleList[]
): JSX.Element | null => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy.sort(
    (a, b) =>
      new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime()
  )

  if (!result?.length) {
    return null
  }

  return <ArticleList label="Najnowsze" articleList={result.reverse()} />
}

const renderArticleListSortedByLikes = (
  articleList: IArticleList[]
): JSX.Element | null => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy.sort((a, b) => b.likes! - a.likes!)

  if (!result?.length) {
    return null
  }

  return <ArticleList label="Najwyżej oceniane" articleList={result} />
}

const renderArticleListSortedByTotalVisitor = (
  articleList: IArticleList[]
): JSX.Element | null => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy.sort(
    (a, b) => b.totalVisitor! - a.totalVisitor!
  )

  if (!result?.length) {
    return null
  }

  return (
    <ArticleList
      label="Najczęściej oglądane - cały czas"
      articleList={result}
    />
  )
}

const renderArticleListSortedByTodayVisitor = (
  articleList: IArticleList[]
): JSX.Element | null => {
  const articleListCopy = articleList.slice(0)
  const result = articleListCopy
    .filter(element => Boolean(element.todayVisitor))
    .sort((a, b) => b.todayVisitor! - a.todayVisitor!)

  if (!result?.length) {
    return null
  }

  return (
    <ArticleList label="Najczęściej oglądane - dzisiaj" articleList={result} />
  )
}

const Dashboard = ({ articleList }: IDashboardProps): JSX.Element => {
  const { data: categoryList } = useCategoryList()

  const renderCategorySectionList = (): (JSX.Element | null)[] => {
    if (!categoryList) {
      return []
    }

    return categoryList.map(({ name }: ICategory) =>
      renderArticleListSortedByCategory(articleList, name!)
    )
  }

  const renderContent = (): JSX.Element[] =>
    [
      renderArticleListSortedByCreatedAt(articleList),
      renderArticleListSortedByLikes(articleList),
      renderArticleListSortedByTotalVisitor(articleList),
      renderArticleListSortedByTodayVisitor(articleList),
      ...renderCategorySectionList()
    ].filter(Boolean) as JSX.Element[]

  return (
    <Container>
      {React.Children.toArray(renderContent()) as JSX.Element[]}
    </Container>
  )
}

export default withErrorBoundary(Dashboard)
