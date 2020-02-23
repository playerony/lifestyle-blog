import React from 'react'

import ArticleListPage from '@component/article/ArticleListPage'

import useArticleList from '@hook/article/useArticleList'
import useVisitorList from '@hook/visitor/useVisitorList'

import articleListTransformator from '@transformator/articleListTransformator'

const ArticleList = (): JSX.Element | null => {
  const articleList = useArticleList()
  const visitorList = useVisitorList()

  const transformedData = articleListTransformator({ articleList, visitorList })

  return <ArticleListPage articleList={transformedData} />
}

export default ArticleList
