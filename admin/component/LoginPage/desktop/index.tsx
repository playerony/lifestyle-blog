import React from 'react'

import LoginForm from './LoginForm'

import ILoginPage from '../ILoginPage'

const LoginPage = (props: ILoginPage): JSX.Element =>
  <LoginForm {...props} />

export default LoginPage
