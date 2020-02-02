import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LoginForm from './LoginForm'
import LogoWrapper from './LogoWrapper'

import { ILoginProps } from '../LoginPage.type'

import { StyledContentWrapper } from './LoginPage.style'
import StyledFadeAnimation from '@style/animation/fade'

const LOGO_TIMEOUT = 2000
const ANIMATION_DURATION = 400
const ANIMATION_NAME = 'desktop_login_page_fade'

const LoginPage = (props: ILoginProps): JSX.Element => {
  const [showLogo, setShowLogo] = useState<boolean>(true)

  useEffect(() => {
    let timer = setTimeout(() => setShowLogo(false), LOGO_TIMEOUT)

    return () => {
      clearTimeout(timer)
    }
  }, [])

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
