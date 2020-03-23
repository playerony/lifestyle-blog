import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LoginForm from './LoginForm'
import LogoWrapper from './LogoWrapper'

import ILoginForm from '@type/login/ILoginForm'

import useTimeout from '@hook/utility/useTimeout'

import StyledFadeAnimation from '@style/animation/fade'
import { StyledContentWrapper } from './LoginPage.style'

const LOGO_TIMEOUT = 2000
const ANIMATION_DURATION = 400
const ANIMATION_NAME = 'desktop_login_page_fade'

const LoginPage = (props: ILoginForm): JSX.Element => {
  const [showLogo, setShowLogo] = useState<boolean>(true)

  useTimeout(() => setShowLogo(false), LOGO_TIMEOUT)

  return (
    <StyledContentWrapper>
      <StyledFadeAnimation
        exit={true}
        enter={true}
        appear={true}
        animationName={ANIMATION_NAME}
        animationDuration={`${ANIMATION_DURATION}ms`}
      >
        <TransitionGroup>
          <CSSTransition
            appear={showLogo}
            classNames={ANIMATION_NAME}
            timeout={ANIMATION_DURATION}
            key={showLogo ? 'logo' : 'login'}
          >
            {showLogo ? <LogoWrapper /> : <LoginForm {...props} />}
          </CSSTransition>
        </TransitionGroup>
      </StyledFadeAnimation>
    </StyledContentWrapper>
  )
}

export default LoginPage
