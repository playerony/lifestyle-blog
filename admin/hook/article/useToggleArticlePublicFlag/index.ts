import { ExecutionResult } from 'graphql'
import { useMutation } from 'react-apollo-hooks'

import { IResult } from './useToggleArticlePublicFlag.type'

import { TOGGLE_ARTICLE_PUBLIC_FLAG_MUTATION } from './useToggleArticlePublicFlag.query'

import { VALIDATION_ERROR } from '@config/constant'

const useToggleArticlePublicFlag = () => {
  const [updateArticleMutation] = useMutation(
    TOGGLE_ARTICLE_PUBLIC_FLAG_MUTATION
  )

  return async (
    articleId: number,
    isPublic: boolean
  ): Promise<IResult | ExecutionResult | void> => {
    const result = await updateArticleMutation({
      errorPolicy: 'all',
      variables: { articleId, isPublic }
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

export default useToggleArticlePublicFlag
