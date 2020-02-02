import { useMutation } from '@apollo/react-hooks'

import { IResult } from './useUploadMutation.type'

import { UPLOAD_MUTATION_QUERY } from './useUploadMutation.query'

const useUploadMutation = (): Function => {
  const [uploadMutation] = useMutation(UPLOAD_MUTATION_QUERY)

  return async (file: File): Promise<IResult> => {
    const result = await uploadMutation({
      variables: { file }
    })

    return result.data
  }
}

export default useUploadMutation
