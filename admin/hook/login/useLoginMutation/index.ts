import { ExecutionResult } from 'graphql'
import { useMutation } from '@apollo/react-hooks'

import { LOGIN_MUTATION } from './useLoginMutation.query'

import { IResult } from './useLoginMutation.type'
import ILoginRequest from '@type/login/ILoginRequest'

import { VALIDATION_ERROR } from '@config/constant'

const useLoginMutation = () => {
  const [loginMutation] = useMutation(LOGIN_MUTATION, { errorPolicy: 'all' })

  return async (
    loginData: ILoginRequest
  ): Promise<IResult | ExecutionResult | void> => {
    const result = await loginMutation({
      variables: { ...loginData }
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

export default useLoginMutation
