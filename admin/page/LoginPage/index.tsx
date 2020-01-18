import React from 'react'

import LoginForm from '@component/LoginPage/LoginForm'

import useLoginMutation from '../../mutation/loginMutation'

import { StyledContentWrapper } from './LoginPage.style'

const LoginPage = (): JSX.Element => {
  const [login] = useLoginMutation()

  return (
    <StyledContentWrapper>
      <LoginForm onClick={(loginData) => {
        console.warn(loginData)

        login({ variables: { ...loginData } })
      }} />
    </StyledContentWrapper>
  )
}

export default LoginPage
