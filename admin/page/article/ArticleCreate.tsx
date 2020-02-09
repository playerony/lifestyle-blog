import React, { useState } from 'react'

import ArticleCreatePage from '@component/article/ArticleCreatePage'

import IArticleSave from '@type/article/IArticleSave'
import TResponseError from '@type/common/TResponseError'

import useCreateMutation from '@hook/article/useCreateMutation'

const initialErrorData: TResponseError<IArticleSave> = {
  title: [],
  imageId: [],
  content: [],
  description: [],
  categoryIdList: []
}

const ArticleCreate = (): JSX.Element => {
  const [errorData, setErrorData] = useState<TResponseError<IArticleSave>>(initialErrorData)

  const createArticle = useCreateMutation()

  const handleCreate = async (article: IArticleSave): Promise<void> => {
    const response = await createArticle(article)

    if (!response) {
      return
    }

    console.warn(response)

    setErrorData(
      Boolean(response.errors)
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
