import React, { ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from '@type/login/ILoginForm'

import useReCaptcha from '@hook/context/useReCaptcha'

import getFieldError from '@utility/getFieldError'

import { StyledHeader, StyledWrapper, StyledInputWrapper, StyledButton } from './LoginForm.style'

const LoginForm = ({ errorData, onLoginDataChange }: ILoginForm): JSX.Element => {
  const { execute } = useReCaptcha()

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    onLoginDataChange({ [name]: value })

  return (
    <StyledWrapper>
      <StyledHeader>Login</StyledHeader>
      <StyledInputWrapper>
        <Input
          name="login"
          label="Login"
          onChange={onInputChange}
          placeholder="What is your login?"
          errorMessage={getFieldError(errorData, 'login')}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <Input
          name="password"
          type="password"
          label="Password"
          onChange={onInputChange}
          placeholder="What is your password?"
          errorMessage={getFieldError(errorData, 'password')}
        />
        <StyledButton
          onClick={execute}
        >
          <svg>
            <use xlinkHref="#left-arrow-button" />
          </svg>
        </StyledButton>
      </StyledInputWrapper>
    </StyledWrapper>
  )
}

export default React.memo(LoginForm)
