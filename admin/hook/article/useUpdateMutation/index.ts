import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import IArticleSave from '@type/article/IArticleSave'
import { IMutationResult } from './useUpdateMutation.type'

import { UPDATE_ARTICLE_MUTATION } from './useUpdateMutation.mutation'

import { VALIDATION_ERROR } from '@config/constant'

const useUpdateMutation = () => {
  const [updateArticleMutation] = useMutation(UPDATE_ARTICLE_MUTATION)

  return async (
    articleId: number,
    article: IArticleSave
  ): Promise<IMutationResult | ExecutionResult | void> => {
    const result = await updateArticleMutation({
      variables: { articleId, article },
      errorPolicy: 'all'
    } as MutationHookOptions)

    if (!result.errors) {
      return result as ExecutionResult
    }

    if (result.errors[0].extensions?.code !== VALIDATION_ERROR) {
      return
    }

    return {
      ...result,
      errors: JSON.parse(result.errors[0].message)
    } as IMutationResult
  }
}

export default useUpdateMutation
