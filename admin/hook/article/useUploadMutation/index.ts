import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { IMutationResult } from './useUploadMutation.type'

import { UPLOAD_MUTATION } from './useUploadMutation.mutation'

const useUploadMutation = () => {
  const [uploadMutation] = useMutation(UPLOAD_MUTATION)

  return async (
    file: File
  ): Promise<IMutationResult | ExecutionResult | void> => {
    const result = await uploadMutation({
      variables: { file },
      errorPolicy: 'all'
    } as MutationHookOptions)

    if (!result.errors) {
      return result as ExecutionResult
    }

    if (result.errors[0].extensions?.code !== 'VALIDATION_ERROR') {
      return
    }

    return {
      ...result,
      errors: JSON.parse(result.errors[0].message)
    } as IMutationResult
  }
}

export default useUploadMutation
