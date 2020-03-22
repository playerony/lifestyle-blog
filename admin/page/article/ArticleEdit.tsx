import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import ArticleEditPage from '@component/article/ArticleEditPage'
import { withErrorBoundary } from '@component/utility/ErrorBoundary'

import EToastType from '@type/common/EToastType'
import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useToast from '@hook/context/useToast'
import useTitle from '@hook/utility/useTitle'
import useLoader from '@hook/context/useLoader'
import useArticle from '@hook/article/useArticle'
import useUpdateMutation from '@hook/article/useUpdateMutation'

import { ARTICLE_EDIT_SUCCESS, ARTICLE_EDIT_ERROR } from '@config/constant'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleEdit = (): JSX.Element | null => {
  useTitle('Edit')

  const [errorData, setErrorData] = useState<TResponseError<IArticleSave>>(initialErrorData)

  const toast = useToast()
  const { toggleLoader } = useLoader()
  const updateArticle = useUpdateMutation()

  const params = useParams<{ articleId: string }>()
  const articleId = Number(params.articleId)

  const { data: foundArticle, loading } = useArticle(articleId)
  toggleLoader(loading)

  const handleUpdate = async (article: IArticleSave): Promise<void> => {
    const response = await updateArticle(articleId, article)

    if (!response) {
      toast.add(ARTICLE_EDIT_ERROR, EToastType.ERROR)

      return
    }

    const isError = Boolean(response.errors)
    if (!isError) {
      toast.add(ARTICLE_EDIT_SUCCESS)
    }

    setErrorData(
      isError
        ? response.errors! as TResponseError<IArticleSave>
        : initialErrorData
    )
  }

  if (loading) {
    return null
  }

  return (
    <ArticleEditPage
      errorData={errorData}
      onEdit={handleUpdate}
      initialData={foundArticle}
    />
  )
}

export default withErrorBoundary(ArticleEdit)
