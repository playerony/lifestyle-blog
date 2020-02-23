import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import ArticleEditPage from '@component/article/ArticleEditPage'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useArticle from '@hook/article/useArticle'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleEdit = (): JSX.Element => {
  const [errorData] = useState<TResponseError<IArticleSave>>(initialErrorData)

  const params = useParams<{ articleId: string }>()
  const articleId = Number(params.articleId)

  const result = useArticle(articleId)

  console.warn(result)

  return <ArticleEditPage initialData={result} errorData={errorData} onEdit={state => console.warn(state)} />
}

export default ArticleEdit