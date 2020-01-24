import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import LoginPage from '@component/LoginPage'

import useLoginMutation from '@hook/useLoginMutation'

import IResponseError from '@type/IResponseError'

import Memory from '@utility/Memory'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

const Login = (): JSX.Element => {
  const history = useHistory()
  const login = useLoginMutation()

  const [errorData, setErrorData] = useState<IResponseError>({})

  const handleLogin = async (loginData: { login: string, password: string }): Promise<void> => {
    const response = await login(loginData)

    if (!Boolean(response.errors)) {
      const token = response.data.login.token

      Memory.set(AUTH_TOKEN, token)
      history.push(routeList.dashboardPageUrl)
    }

    setErrorData(Boolean(response.errors) ? response.errors : {})
  }

  return <LoginPage errorData={errorData} onClick={handleLogin} />
}

export default Login
