import { useContext } from 'react'

import { ReCaptchaContext } from '@context/ReCaptcha'

const useReCaptcha = () => useContext(ReCaptchaContext)

export default useReCaptcha
