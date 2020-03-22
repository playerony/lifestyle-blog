import React, { useState } from 'react'

import ArticleCreatePage from '@component/article/ArticleCreatePage'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useToast from '@hook/context/useToast'
import useTitle from '@hook/utility/useTitle'
import useCreateMutation from '@hook/article/useCreateMutation'

import { ARTICLE_CREATE_MESSAGE } from '@config/constant'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleCreate = (): JSX.Element => {
  useTitle('Create')

  const [errorData, setErrorData] = useState<TResponseError<IArticleSave>>(initialErrorData)

  const toast = useToast()
  const createArticle = useCreateMutation()

  const handleCreate = async (article: IArticleSave): Promise<void> => {
    const response = await createArticle(article)

    if (!response) {
      return
    }

    const isError = Boolean(response.errors)
    if (!isError) {
      toast.add(ARTICLE_CREATE_MESSAGE)
    }

    setErrorData(
      isError
        ? response.errors! as TResponseError<IArticleSave>
        : initialErrorData
    )
  }

  return (
    <ArticleCreatePage
      errorData={errorData}
      onCreate={handleCreate}
    />
  )
}

export default ArticleCreate
