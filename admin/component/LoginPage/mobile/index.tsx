import React, { useState, ChangeEvent, FormEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginPage from '../ILoginPage'
import ILoginRequest from '@type/ILoginRequest'

import { StyledContentWrapper, StyledForm } from './LoginPage.style'

const LoginPage = ({ onClick, errorData }: ILoginPage): JSX.Element => {
  const [loginData, setLoginData] = useState<ILoginRequest>({ login: '', password: '' })

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  const getFieldError = (name: string): string => {
    if (Boolean(errorData[name])) {
      return errorData[name][0]
    }

    return ''
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onClick(loginData)
  }

  return (
    <StyledContentWrapper>
      <svg>
        <use xlinkHref="#logo" />
      </svg>
      <StyledForm onSubmit={handleSubmit} target="_self">
        <Input
          label="Login"
          errorMessage={getFieldError('login')}
          name="login"
          onChange={onInputChange}
          placeholder="What is your username?"
        />
        <Input
          type="password"
          label="Password"
          errorMessage={getFieldError('password')}
          name="password"
          onChange={onInputChange}
          placeholder="What is your password?"
        />
        <Input type="submit" style={{ display: 'none' }} />
      </StyledForm>
    </StyledContentWrapper>
  )
}

export default LoginPage
