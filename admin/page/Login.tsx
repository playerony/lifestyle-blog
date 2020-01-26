import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import LoginPage from '@component/LoginPage'

import useLoginMutation from '@hook/LoginPage/useLoginMutation'

import TResponseError from '@type/common/TResponseError'
import ILoginRequest from '@type/LoginPage/ILoginRequest'

import Memory from '@utility/Memory'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

const initialErrorData: TResponseError<ILoginRequest> = {
  login: [],
  password: []
}

const Login = (): JSX.Element => {
  const history = useHistory()
  const login = useLoginMutation()

  const [errorData, setErrorData] = useState<TResponseError<ILoginRequest>>(initialErrorData)

  const handleLogin = async (loginData: ILoginRequest): Promise<void> => {
    const response = await login(loginData)

    if (!response) {
      return
    }

    if (!Boolean(response.errors)) {
      const token = response?.data?.login?.token

      Memory.set(AUTH_TOKEN, token)
      history.push(routeList.dashboardPageUrl)
    }

    setErrorData(
      Boolean(response.errors)
        ? response.errors! as TResponseError<ILoginRequest>
        : initialErrorData
    )
  }

  return <LoginPage errorData={errorData} onClick={handleLogin} />
}

export default Login
