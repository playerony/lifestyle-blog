import React, { useState, ChangeEvent, FormEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginPage from '../ILoginPage'
import ILoginRequest from '@type/LoginPage/ILoginRequest'

import getFieldError from '@utility/getFieldError'

import { StyledContentWrapper, StyledForm } from './LoginPage.style'

const LoginPage = ({ onClick, errorData }: ILoginPage): JSX.Element => {
  const [loginData, setLoginData] = useState<ILoginRequest>({ login: '', password: '' })

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    onClick(loginData)
  }

  return (
    <StyledContentWrapper>
      <svg>
        <use xlinkHref="#logo" />
      </svg>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          name="login"
          label="Login"
          onChange={onInputChange}
          placeholder="What is your username?"
          errorMessage={getFieldError(errorData, 'login')}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          onChange={onInputChange}
          placeholder="What is your password?"
          errorMessage={getFieldError(errorData, 'password')}
        />
        <Input type="submit" style={{ display: 'none' }} />
      </StyledForm>
    </StyledContentWrapper>
  )
}

export default LoginPage
