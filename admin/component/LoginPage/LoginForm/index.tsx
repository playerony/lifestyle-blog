import React, { useState, ChangeEvent } from 'react'

import Input from '@component/generic/Input'
import ContentWrapper from '../ContentWrapper'

import ILoginForm from './ILoginForm'

const LoginForm = ({ onClick }: ILoginForm): JSX.Element => {
  const [loginData, setLoginData] = useState<{ login: string, password: string }>({ login: '', password: '' })

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  return (
    < ContentWrapper >
      <h1>Login</h1>
      <Input label="Login" name="login" onChange={onInputChange} placeholder="What is your username?" />
      <Input
        type="password"
        label="Password"
        name="password"
        onChange={onInputChange}
        placeholder="What is your password?"
      />
      <button onClick={() => onClick(loginData)}>Login</button>
    </ContentWrapper >
  )
}

export default React.memo(LoginForm)
