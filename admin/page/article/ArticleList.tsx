import React from 'react'

import ArticleListPage from '@component/article/ArticleListPage'

import useArticleList from '@hook/article/useArticleList'

import articleListTransformator from '@transformator/articleListTransformator'

const ArticleList = (): JSX.Element => {
  const data = useArticleList()

  console.warn(articleListTransformator(data))

  return <ArticleListPage />
}

export default ArticleList
