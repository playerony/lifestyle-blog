import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { ILoginData } from '@component/LoginPage/LoginForm/ILoginForm'

import { LOGIN_MUTATION_QUERY } from './useLoginMutation.query'

const useLoginMutation = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION_QUERY)

  return async (loginData: ILoginData) => {
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
