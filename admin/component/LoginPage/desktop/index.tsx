import React, { useState, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import LoginForm from './LoginForm'
import LogoWrapper from './LogoWrapper'

import ILoginPage from '../ILoginPage'

import { StyledContentWrapper, StyledAnimation } from './LoginPage.style'

const LOGO_TIMEOUT = 5000

const LoginPage = (props: ILoginPage): JSX.Element => {
  const [showLogo, setShowLogo] = useState<boolean>(true)

  useEffect(() => {
    let timer = setTimeout(() => setShowLogo(false), LOGO_TIMEOUT)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <StyledContentWrapper>
      <StyledAnimation>
        <TransitionGroup>
          <CSSTransition
            key={showLogo ? 'logo' : 'login'}
            classNames="fade"
            appear={showLogo}
            timeout={300}
          >
            {showLogo ? <LogoWrapper /> : <LoginForm {...props} />}
          </CSSTransition>
        </TransitionGroup>
      </StyledAnimation>
    </StyledContentWrapper>
  )
}

export default LoginPage
