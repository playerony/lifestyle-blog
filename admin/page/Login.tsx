import { isEqual } from 'lodash'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import LoginPageMobile from '@component/login/mobile'
import LoginPageDesktop from '@component/login/desktop'
import ReCaptchaProvider from '@service/ReCaptchaProvider'

import useTitle from '@hook/utility/useTitle'
import usePrevious from '@hook/utility/usePrevious'
import useLoginMutation from '@hook/login/useLoginMutation'

import ILoginRequest from '@type/login/ILoginRequest'
import TResponseError from '@type/common/TResponseError'

import Memory from '@utility/Memory'
import isMobileResolution from '@utility/isMobileResolution'

import routeList from '@config/routeList'
import { AUTH_TOKEN } from '@config/constant'

const initialLoginData: ILoginRequest = { login: '', password: '' }
const initialErrorData: TResponseError<ILoginRequest> = {
  login: [],
  password: []
}

const Login = (): JSX.Element => {
  useTitle('Login')

  const [loginData, setLoginData] = useState<ILoginRequest>(initialLoginData)
  const [errorData, setErrorData] = useState<TResponseError<ILoginRequest>>(
    initialErrorData
  )

  const history = useHistory()
  const login = useLoginMutation()
  const previousLoginData = usePrevious(loginData)

  const handleLogin = async (): Promise<void> => {
    const response = await login(loginData)

    if (!response) {
      return
    }

    if (!response.errors) {
      const token = response?.data?.login?.token

      Memory.set(AUTH_TOKEN, token)
      history.push(routeList.article.list)
    }

    setErrorData(
      response.errors
        ? (response.errors! as TResponseError<ILoginRequest>)
        : initialErrorData
    )
  }

  const preventNextRequest = (): boolean =>
    isEqual(loginData, previousLoginData || initialLoginData)

  const onLoginDataChange = (data: Partial<ILoginRequest>): void =>
    setLoginData(prev => ({ ...prev, ...data }))

  return (
    <ReCaptchaProvider onVerify={handleLogin}>
      {React.createElement(
        isMobileResolution() ? LoginPageMobile : LoginPageDesktop,
        {
          errorData,
          onLoginDataChange,
          preventNextRequest: preventNextRequest()
        }
      )}
    </ReCaptchaProvider>
  )
}

export default Login
