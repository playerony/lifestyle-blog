import React from 'react'
import { CSSTransition } from 'react-transition-group'

import LoginForm from './LoginForm'

import { ILoginProps } from '../LoginPage.type'

import StyledFadeAnimation from '@style/animation/fade'

const ANIMATION_DURATION = 500
const ANIMATION_NAME = 'mobile_login_page_fade'

const LoginPage = (props: ILoginProps): JSX.Element => (
  <StyledFadeAnimation
    exit={true}
    enter={true}
    appear={true}
    animationName={ANIMATION_NAME}
    animationDuration={`${ANIMATION_DURATION}ms`}
  >
    <CSSTransition
      in={true}
      appear={true}
      classNames={ANIMATION_NAME}
      timeout={ANIMATION_DURATION}
    >
      <LoginForm {...props} />
    </CSSTransition>
  </StyledFadeAnimation>
)

export default LoginPage
