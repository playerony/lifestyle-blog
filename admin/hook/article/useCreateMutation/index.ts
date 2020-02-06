import { useMutation } from '@apollo/react-hooks'

import { IResult } from './useCreateMutation.type'
import IArticleSave from '@type/article/IArticleSave'

import { CREATE_ARTICLE_QUERY } from './useCreateMutation.query'

const useCreateMutation = () => {
  const [createArticleMutation] = useMutation(CREATE_ARTICLE_QUERY)

  return async (article: IArticleSave): Promise<IResult> => {
    const result = await createArticleMutation({
      variables: { article }
    })

    return result.data.createArticle
  }
}

export default useCreateMutation
