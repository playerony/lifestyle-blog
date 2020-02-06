import { useMutation } from '@apollo/react-hooks'

import { IResult } from './useCreate.type'
import IArticleCreate from '@type/article/IArticleSave'

import { CREATE_ARTICLE_QUERY } from './useCreate.query'

const useCreate = (): Function => {
  const [uploadMutation] = useMutation(CREATE_ARTICLE_QUERY)

  return async (article: IArticleCreate): Promise<IResult> => {
    const result = await uploadMutation({
      variables: { article }
    })

    return result.data
  }
}

export default useCreate
