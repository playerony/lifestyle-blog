import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import ArticleEditPage from '@component/article/ArticleEditPage'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useArticle from '@hook/article/useArticle'
import useUpdateMutation from '@hook/article/useUpdateMutation'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleEdit = (): JSX.Element => {
  const [errorData, setErrorData] = useState<TResponseError<IArticleSave>>(initialErrorData)

  const updateArticle = useUpdateMutation()

  const params = useParams<{ articleId: string }>()
  const articleId = Number(params.articleId)

  const result = useArticle(articleId)

  const handleUpdate = async (article: IArticleSave): Promise<void> => {
    const response = await updateArticle(articleId, article)

    if (!response) {
      return
    }

    setErrorData(
      Boolean(response.errors)
        ? response.errors! as TResponseError<IArticleSave>
        : initialErrorData
    )
  }

  return <ArticleEditPage initialData={result} errorData={errorData} onEdit={handleUpdate} />
}

export default ArticleEdit