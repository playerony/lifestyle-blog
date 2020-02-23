import { ExecutionResult } from 'graphql'
import { useMutation } from 'react-apollo-hooks'

import { IResult } from './useUploadMutation.type'

import { UPLOAD_MUTATION } from './useUploadMutation.query'

const useUploadMutation = () => {
  const [uploadMutation] = useMutation(UPLOAD_MUTATION)

  return async (file: File): Promise<IResult | ExecutionResult | void> => {
    const result = await uploadMutation({
      variables: { file },
      errorPolicy: 'all'
    })

    if (!result.errors) {
      return result as ExecutionResult
    }

    if (result.errors[0].extensions?.code !== 'VALIDATION_ERROR') {
      return
    }

    return { ...result, errors: JSON.parse(result.errors[0].message) } as IResult
  }
}

export default useUploadMutation
