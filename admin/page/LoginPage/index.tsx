import React, { useState } from 'react'

import LoginForm from '@component/LoginPage/LoginForm'

import useLoginMutation from '@hook/useLoginMutation'

import { IError } from '@component/LoginPage/LoginForm/ILoginForm'

import { StyledContentWrapper } from './LoginPage.style'

const saveUserData = (token: string): void => {
  localStorage.setItem('AUTH_TOKEN', token)
}

const LoginPage = (): JSX.Element => {
  const login = useLoginMutation()

  const [errorData, setErrorData] = useState<IError>({})

  const handleLogin = async (loginData: { login: string, password: string }): Promise<void> => {
    const response = await login(loginData)

    if (!Boolean(response.errors)) {
      const token = response.data.login.token

      saveUserData(token)
    }

    setErrorData(Boolean(response.errors) ? response.errors : {})
  }

  return (
    <StyledContentWrapper>
      <LoginForm errorData={errorData} onClick={handleLogin} />
    </StyledContentWrapper>
  )
}

export default LoginPage
