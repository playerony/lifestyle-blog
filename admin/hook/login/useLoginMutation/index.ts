import { ExecutionResult } from 'graphql'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { LOGIN_MUTATION } from './useLoginMutation.mutation'

import { IMutationResult } from './useLoginMutation.type'
import ILoginRequest from '@type/login/ILoginRequest'

import { VALIDATION_ERROR } from '@config/constant'

const useLoginMutation = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION)

  return async (
    loginData: ILoginRequest
  ): Promise<IMutationResult | ExecutionResult | void> => {
    const result = await loginMutation({
      variables: { ...loginData },
      errorPolicy: 'all'
    } as MutationHookOptions)

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

export default useLoginMutation
