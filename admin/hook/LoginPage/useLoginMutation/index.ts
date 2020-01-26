import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { LOGIN_MUTATION_QUERY } from './useLoginMutation.query'

import IResult from './IResult'
import ILoginRequest from '@type/LoginPage/ILoginRequest'

const useLoginMutation = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION_QUERY)

  return async (
    loginData: ILoginRequest
  ): Promise<IResult | ExecutionResult | void> => {
    const result = await loginMutation({
      variables: { ...loginData },
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

export default useLoginMutation
