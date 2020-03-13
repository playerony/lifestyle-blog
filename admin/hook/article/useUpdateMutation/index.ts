import { ExecutionResult } from 'graphql'
import { useMutation } from 'react-apollo-hooks'

import { IResult } from './useUpdateMutation.type'
import IArticleSave from '@type/article/IArticleSave'

import { UPDATE_ARTICLE_MUTATION } from './useUpdateMutation.query'

import { VALIDATION_ERROR } from '@config/constant'

const useUpdateMutation = () => {
  const [updateArticleMutation] = useMutation(UPDATE_ARTICLE_MUTATION)

  return async (
    articleId: number,
    article: IArticleSave
  ): Promise<IResult | ExecutionResult | void> => {
    const result = await updateArticleMutation({
      errorPolicy: 'all',
      variables: { articleId, article }
    })

    if (!result.errors) {
      return result as ExecutionResult
    }

    if (result.errors[0].extensions?.code !== VALIDATION_ERROR) {
      return
    }

    return {
      ...result,
      errors: JSON.parse(result.errors[0].message)
    } as IResult
  }
}

export default useUpdateMutation
