import React from 'react'

import ArticleListPage from '@component/article/ArticleListPage'

import useArticleList from '@hook/article/useArticleList'

const ArticleList = (): JSX.Element => {
  const data = useArticleList()

  console.warn(data)

  return <ArticleListPage />
}

export default ArticleList
