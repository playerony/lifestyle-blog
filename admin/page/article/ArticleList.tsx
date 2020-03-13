import React from 'react'

import ArticleListPage from '@component/article/ArticleListPage'

import useLoading from '@hook/utility/useLoading'
import useArticleList from '@hook/article/useArticleList'
import useVisitorList from '@hook/visitor/useVisitorList'

import articleListTransformator from '@transformator/articleListTransformator'

const ArticleList = (): JSX.Element | null => {
  const { toggleLoader } = useLoading()

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
