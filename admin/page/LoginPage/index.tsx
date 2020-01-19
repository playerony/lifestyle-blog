import React, { useState } from 'react'

import LoginForm from '@component/LoginPage/LoginForm'

import useLoginMutation from '@hook/useLoginMutation'

import { IError } from '@component/LoginPage/LoginForm/ILoginForm'

import { StyledContentWrapper } from './LoginPage.style'

const LoginPage = (): JSX.Element => {
  const login = useLoginMutation()

  const [errorData, setErrorData] = useState<IError>({})

  const handleLogin = async (loginData: { login: string, password: string }): Promise<void> => {
    const response = await login(loginData)

    setErrorData(Boolean(response.errors) ? response.errors : {})
  }

  return (
    <StyledContentWrapper>
      <LoginForm errorData={errorData} onClick={handleLogin} />
    </StyledContentWrapper>
  )
}

export default LoginPage
