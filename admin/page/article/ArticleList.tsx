import React from 'react'

import ArticleListPage from '@component/article/ArticleListPage'

import useLoader from '@hook/context/useLoader'
import useArticleList from '@hook/article/useArticleList'
import useVisitorList from '@hook/visitor/useVisitorList'

import articleListTransformator from '@transformator/articleListTransformator'

const ArticleList = (): JSX.Element | null => {
  const { toggleLoader } = useLoader()

  const { data: articleList, loading: articleListLoading } = useArticleList()
  const { data: visitorList, loading: visitorListLoading } = useVisitorList()

  toggleLoader(articleListLoading && visitorListLoading)
  const transformedData = articleListTransformator({ articleList, visitorList })

  if (articleListLoading && visitorListLoading) {
    return null
  }

  return <ArticleListPage articleList={transformedData} />
}

export default ArticleList
