import React, { useState } from 'react'

import ArticleCreatePage from '@component/article/ArticleCreatePage'

import EToastType from '@type/common/EToastType'
import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useToast from '@hook/context/useToast'
import useTitle from '@hook/utility/useTitle'
import useCreateMutation from '@hook/article/useCreateMutation'

import { ARTICLE_CREATE_SUCCESS, ARTICLE_CREATE_ERROR } from '@config/constant'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleCreate = (): JSX.Element => {
  useTitle('Dodawanie nowego artykułu')

  const [errorData, setErrorData] = useState<TResponseError<IArticleSave>>(
    initialErrorData
  )

  const toast = useToast()
  const createArticle = useCreateMutation()

  const handleCreate = async (article: IArticleSave): Promise<void> => {
    const response = await createArticle(article)

    if (!response) {
      toast.add(ARTICLE_CREATE_ERROR, EToastType.ERROR)

      return
    }

    const isError = Boolean(response.errors)
    if (!isError) {
      toast.add(ARTICLE_CREATE_SUCCESS)
    }

    setErrorData(
      isError
        ? (response.errors! as TResponseError<IArticleSave>)
        : initialErrorData
    )
  }

  return <ArticleCreatePage errorData={errorData} onCreate={handleCreate} />
}

export default ArticleCreate
