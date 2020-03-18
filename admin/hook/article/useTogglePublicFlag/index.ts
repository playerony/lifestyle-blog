import { ExecutionResult } from 'graphql'
import { useMutation } from '@apollo/react-hooks'

import { IMutationResult } from './useTogglePublicFlag.type'

import { TOGGLE_PUBLIC_FLAG_MUTATION } from './useTogglePublicFlag.mutation'

import { VALIDATION_ERROR } from '@config/constant'

const useTogglePublicFlag = () => {
  const [updateArticleMutation] = useMutation(TOGGLE_PUBLIC_FLAG_MUTATION, {
    errorPolicy: 'all'
  })

  return async (
    articleId: number,
    isPublic: boolean
  ): Promise<IMutationResult | ExecutionResult | void> => {
    const result = await updateArticleMutation({
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
    } as IMutationResult
  }
}

export default useTogglePublicFlag
