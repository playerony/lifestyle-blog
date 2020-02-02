import React from 'react'

import LoginPageMobile from './mobile'
import LoginPageDesktop from './desktop'

import { ILoginProps } from './LoginPage.type'

import isMobile from '@utility/isMobile'

const LoginPage = (props: ILoginProps): JSX.Element =>
  React.createElement(isMobile() ? LoginPageMobile : LoginPageDesktop, props)

export default React.memo(LoginPage)
