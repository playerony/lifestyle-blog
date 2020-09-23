import React, { ChangeEvent } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from '@type/login/ILoginForm'

import useReCaptcha from '@hook/context/useReCaptcha'

import getFieldError from '@utility/getFieldError'

import {
  StyledHeader,
  StyledWrapper,
  StyledInputWrapper,
  StyledButton
} from './LoginForm.style'

const LoginForm = ({
  errorData,
  preventNextRequest,
  onLoginDataChange
}: ILoginForm): JSX.Element => {
  const { execute } = useReCaptcha()

  const onInputChange = ({
    target: { name, value }
  }: ChangeEvent<HTMLInputElement>): void =>
    onLoginDataChange({ [name]: value })

  return (
    <StyledWrapper>
      <StyledHeader>Login</StyledHeader>
      <StyledInputWrapper>
        <Input
          name="login"
          label="Login"
          onChange={onInputChange}
          placeholder="Jaki jest Twój login?"
          errorMessage={getFieldError(errorData, 'login')}
        />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <Input
          name="password"
          type="password"
          label="Hasło"
          onChange={onInputChange}
          placeholder="Jakie jest Twoje hasło?"
          errorMessage={getFieldError(errorData, 'password')}
        />
        <StyledButton onClick={execute} disabled={preventNextRequest}>
          <svg>
            <use xlinkHref="#right-arrow" />
          </svg>
        </StyledButton>
      </StyledInputWrapper>
    </StyledWrapper>
  )
}

export default React.memo(LoginForm)
