import React from 'react'

import LoginPageMobile from './mobile'
import LoginPageDesktop from './desktop'

import ILoginPage from './ILoginPage'

import isMobile from '@utility/isMobile'

const LoginPage = (props: ILoginPage): JSX.Element =>
  React.createElement(isMobile() ? LoginPageMobile : LoginPageDesktop, props)

export default React.memo(LoginPage)
