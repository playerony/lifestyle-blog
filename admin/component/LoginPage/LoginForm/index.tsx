import React from 'react'

import Input from '@component/generic/Input'
import ContentWrapper from '../ContentWrapper'

const LoginForm = (): JSX.Element => (
  <ContentWrapper>
    <h1>Login</h1>
    <Input label="Login" placeholder="What is your username?" />
    <Input
      type="password"
      label="Password"
      placeholder="What is your password?"
    />
  </ContentWrapper>
)

export default LoginForm
