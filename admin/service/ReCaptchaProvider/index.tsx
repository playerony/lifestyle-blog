import React, { LegacyRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import EToastType from '@type/common/EToastType'
import { IReCaptchaProviderProps } from './ReCaptchaProvider.type'

import useToast from '@hook/context/useToast'

import { ReCaptchaContext } from '@context/ReCaptcha'

import keys from '@config/keys'
import { CAPTCHA_ERROR_MESSAGE, CAPTCHA_EXIPRED_MESSAGE } from '@config/constant'

const recaptchaRef: LegacyRef<ReCAPTCHA> = React.createRef()

const ReCaptchaProvider = ({ children, onVerify }: IReCaptchaProviderProps): JSX.Element => {
  const toast = useToast()

  const captchaReset = (): void =>
    recaptchaRef.current?.reset()

  const handleReCaptchaChange = (value: string | null): void => {
    captchaReset()

    if (value) {
      onVerify()
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

  const execute = (): void => {
    recaptchaRef.current?.execute()
  }

  return (
    <ReCaptchaContext.Provider value={{ execute }}>
      {children}
      <ReCAPTCHA
        size="invisible"
        ref={recaptchaRef}
        sitekey={keys.captchaPublicKey!}
        onChange={handleReCaptchaChange}
        onErrored={handleReCaptchaError}
        onExpired={handleReCaptchaExpired}
      />
    </ReCaptchaContext.Provider>
  )
}

export default ReCaptchaProvider