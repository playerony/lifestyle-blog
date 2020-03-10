import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import ArticleEditPage from '@component/article/ArticleEditPage'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useToast from '@hook/utility/useToast'
import useArticle from '@hook/article/useArticle'
import useUpdateMutation from '@hook/article/useUpdateMutation'

import { ARTICLE_EDIT_MESSAGE } from '@config/constant'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleEdit = (): JSX.Element => {
  const [errorData, setErrorData] = useState<TResponseError<IArticleSave>>(initialErrorData)

  const toast = useToast()
  const updateArticle = useUpdateMutation()

  const params = useParams<{ articleId: string }>()
  const articleId = Number(params.articleId)
  const foundArticle = useArticle(articleId)

  const handleUpdate = async (article: IArticleSave): Promise<void> => {
    const response = await updateArticle(articleId, article)

    if (!response) {
      return
    }

    const isError = Boolean(response.errors)
    if (!isError) {
      toast.add(ARTICLE_EDIT_MESSAGE)
    }

    setErrorData(
      isError
        ? response.errors! as TResponseError<IArticleSave>
        : initialErrorData
    )
  }

  return (
    <ArticleEditPage
      errorData={errorData}
      onEdit={handleUpdate}
      initialData={foundArticle}
    />
  )
}

export default ArticleEdit