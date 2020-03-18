import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import IArticleSave from '@type/article/IArticleSave'
import { IMutationResult } from './useCreateMutation.type'

import { CREATE_ARTICLE_MUTATION } from './useCreateMutation.mutation'

import { VALIDATION_ERROR } from '@config/constant'

const useCreateMutation = () => {
  const [createArticleMutation] = useMutation(CREATE_ARTICLE_MUTATION)

  return async (
    article: IArticleSave
  ): Promise<IMutationResult | ExecutionResult | void> => {
    const result = await createArticleMutation({
      variables: { article },
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

export default useCreateMutation
