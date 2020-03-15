import { isEqual } from 'lodash'
import ReCAPTCHA from 'react-google-recaptcha'
import React, { useState, ChangeEvent, LegacyRef } from 'react'

import Input from '@component/generic/Input'

import ILoginForm from '@type/login/ILoginForm'
import EToastType from '@type/common/EToastType'
import ILoginRequest from '@type/login/ILoginRequest'

import useToast from '@hook/utility/useToast'

import getFieldError from '@utility/getFieldError'

import keys from '@config/keys'
import { CAPTCHA_ERROR_MESSAGE, CAPTCHA_EXIPRED_MESSAGE } from '@config/constant'

import { StyledHeader, StyledWrapper, StyledInputWrapper, StyledButton } from './LoginForm.style'

const initialState: ILoginRequest = { login: '', password: '' }

const recaptchaRef: LegacyRef<ReCAPTCHA> = React.createRef()

const LoginForm = ({ errorData, onClick }: ILoginForm): JSX.Element => {
  const toast = useToast()

  const [loginData, setLoginData] = useState<ILoginRequest>(initialState)
  const [requestLoginData, setRequestLoginData] = useState<ILoginRequest>(initialState)

  const onInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(previousLoginData => ({ ...previousLoginData, [name]: value }))

  const captchaReset = (): void =>
    recaptchaRef.current?.reset()

  const handleReCaptchaChange = (value: string | null): void => {
    captchaReset()

    if (value) {
      onClick(loginData)
      setRequestLoginData(loginData)
    } else {
      toast.add(CAPTCHA_ERROR_MESSAGE, EToastType.ERROR)
    }
  }

  const handleReCaptchaError = (): void => {
    captchaReset()

    toast.add(CAPTCHA_ERROR_MESSAGE, EToastType.ERROR)
  }

  const handleReCaptchaExpired = (): void => {
    captchaReset()

    toast.add(CAPTCHA_EXIPRED_MESSAGE, EToastType.ERROR)
  }

  const isButtonDisabled = (): boolean => isEqual(loginData, requestLoginData)

  return (
    <>
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
            onClick={() => recaptchaRef.current?.execute()}
            disabled={isButtonDisabled()}
          >
            <svg>
              <use xlinkHref="#left-arrow-button" />
            </svg>
          </StyledButton>
        </StyledInputWrapper>
      </StyledWrapper>
      <ReCAPTCHA
        size="invisible"
        ref={recaptchaRef}
        sitekey={keys.captchaPublicKey!}
        onChange={handleReCaptchaChange}
        onErrored={handleReCaptchaError}
        onExpired={handleReCaptchaExpired}
      />
    </>
  )
}

export default React.memo(LoginForm)
