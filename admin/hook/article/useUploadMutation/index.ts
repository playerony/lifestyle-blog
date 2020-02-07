import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { IResult } from './useUploadMutation.type'

import { UPLOAD_MUTATION_QUERY } from './useUploadMutation.query'

const useUploadMutation = () => {
  const [uploadMutation] = useMutation(UPLOAD_MUTATION_QUERY)

  return async (file: File): Promise<IResult | ExecutionResult | void> => {
    const result = await uploadMutation({
      variables: { file },
      errorPolicy: 'all'
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

export default useUploadMutation
