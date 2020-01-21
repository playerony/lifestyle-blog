import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import LoginForm from '@component/LoginPage/LoginForm'
import { IError } from '@component/LoginPage/LoginForm/ILoginForm'

import useLoginMutation from '@hook/useLoginMutation'

import Memory from '@utility/Memory'
import routeList from '@config/routeList'

import { StyledContentWrapper } from './LoginPage.style'

const LoginPage = (): JSX.Element => {
  const history = useHistory()
  const login = useLoginMutation()

  const [errorData, setErrorData] = useState<IError>({})

  const handleLogin = async (loginData: { login: string, password: string }): Promise<void> => {
    const response = await login(loginData)

    if (!Boolean(response.errors)) {
      const token = response.data.login.token

      Memory.set('AUTH_TOKEN', token)
      history.push(routeList.dashboardPageUrl)
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
