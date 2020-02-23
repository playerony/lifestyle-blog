import { ExecutionResult } from 'graphql'
import { useMutation } from 'react-apollo-hooks'

import { IResult } from './useCreateMutation.type'
import IArticleSave from '@type/article/IArticleSave'

import { CREATE_ARTICLE_MUTATION } from './useCreateMutation.query'

import { VALIDATION_ERROR } from '@config/constant'

const useCreateMutation = () => {
  const [createArticleMutation] = useMutation(CREATE_ARTICLE_MUTATION)

  return async (
    article: IArticleSave
  ): Promise<IResult | ExecutionResult | void> => {
    const result = await createArticleMutation({
      errorPolicy: 'all',
      variables: { article }
    })

    if (!result.errors) {
      return result as ExecutionResult
    }

    if (result.errors[0].extensions?.code !== VALIDATION_ERROR) {
      return
    }

    return { ...result, errors: JSON.parse(result.errors[0].message) } as IResult
  }
}

export default useCreateMutation
