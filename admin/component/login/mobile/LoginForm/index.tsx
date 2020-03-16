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

import { StyledContentWrapper, StyledForm } from './LoginForm.style'

const initialState: ILoginRequest = { login: '', password: '' }

const recaptchaRef: LegacyRef<ReCAPTCHA> = React.createRef()

const LoginForm = ({ errorData, onClick }: ILoginForm): JSX.Element => {
  const toast = useToast()

  const [loginData, setLoginData] = useState<ILoginRequest>(initialState)
  const [requestLoginData, setRequestLoginData] = useState<ILoginRequest>(initialState)

  const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void =>
    setLoginData(prev => ({ ...prev, [name]: value }))

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
      <StyledContentWrapper>
        <svg>
          <use xlinkHref="#logo" />
        </svg>
        <StyledForm onSubmit={event => {
          event.preventDefault()

          recaptchaRef.current?.execute()
        }}>
          <Input
            name="login"
            label="Login"
            onChange={handleInputChange}
            placeholder="What is your login?"
            errorMessage={getFieldError(errorData, 'login')}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            onChange={handleInputChange}
            placeholder="What is your password?"
            errorMessage={getFieldError(errorData, 'password')}
          />
          <Input
            type="submit"
            style={{ display: 'none' }}
            disabled={isButtonDisabled()}
          />
        </StyledForm>
      </StyledContentWrapper>
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
