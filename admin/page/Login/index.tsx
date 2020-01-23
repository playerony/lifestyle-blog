import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import LoginPage from '@component/LoginPage'
import { IError } from '@component/LoginPage/common/ILoginForm'

import useLoginMutation from '@hook/useLoginMutation'

import Memory from '@utility/Memory'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

import { StyledContentWrapper } from './Login.style'

const Login = (): JSX.Element => {
  const history = useHistory()
  const login = useLoginMutation()

  const [errorData, setErrorData] = useState<IError>({})

  const handleLogin = async (loginData: { login: string, password: string }): Promise<void> => {
    const response = await login(loginData)

    if (!Boolean(response.errors)) {
      const token = response.data.login.token

      Memory.set(AUTH_TOKEN, token)
      history.push(routeList.dashboardPageUrl)
    }

    setErrorData(Boolean(response.errors) ? response.errors : {})
  }

  return (
    <StyledContentWrapper>
      <LoginPage errorData={errorData} onClick={handleLogin} />
    </StyledContentWrapper>
  )
}

export default Login
