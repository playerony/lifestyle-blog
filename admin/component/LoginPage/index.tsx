import React from 'react'

import LoginPageMobile from './mobile'
import LoginPageDesktop from './desktop'

import ILoginForm from '@type/login/ILoginForm'

import isMobile from '@utility/isMobile'

const LoginPage = (props: ILoginForm): JSX.Element =>
  React.createElement(isMobile() ? LoginPageMobile : LoginPageDesktop, props)

export default React.memo(LoginPage)
