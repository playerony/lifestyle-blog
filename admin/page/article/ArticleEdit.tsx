import React from 'react'
import { useParams } from 'react-router-dom'

import useArticle from '@hook/article/useArticle'

const ArticleEdit = (): JSX.Element => {
  const params = useParams<{ articleId: string }>()
  const articleId = Number(params.articleId)

  const result = useArticle(articleId)

  console.warn(result)

  return <div />
}

export default ArticleEdit