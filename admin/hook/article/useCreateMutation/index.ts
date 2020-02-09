import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { IResult } from './useCreateMutation.type'
import IArticleSave from '@type/article/IArticleSave'

import { CREATE_ARTICLE_QUERY } from './useCreateMutation.query'

const useCreateMutation = () => {
  const [createArticleMutation] = useMutation(CREATE_ARTICLE_QUERY)

  return async (
    article: IArticleSave
  ): Promise<IResult | ExecutionResult | void> => {
    const result = await createArticleMutation({
      errorPolicy: 'all',
      variables: { article }
    } as MutationHookOptions)

    if (!result.errors) {
      return result
    }

    if (result.errors[0].extensions?.code !== 'VALIDATION_ERROR') {
      return
    }

    return { ...result, errors: JSON.parse(result.errors[0].message) }
  }
}

export default useCreateMutation
