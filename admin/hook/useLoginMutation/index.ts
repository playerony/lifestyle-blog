import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { LOGIN_MUTATION_QUERY } from './useLoginMutation.query'

import ILoginRequest from '@type/ILoginRequest'

const useLoginMutation = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION_QUERY)

  return async (loginData: ILoginRequest) => {
    const result = await loginMutation({
      variables: { ...loginData },
      errorPolicy: 'all'
    } as MutationHookOptions)

    if (!result.errors) {
      return result
    }

    return { ...result, errors: JSON.parse(result.errors[0].message) }
  }
}

export default useLoginMutation
