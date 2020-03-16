import { Context, createContext } from 'react'

import { IReCaptchaProps } from './ReCaptcha.type'

const initialData: IReCaptchaProps = {
  execute: () => {}
}

export const ReCaptchaContext: Context<IReCaptchaProps> = createContext(
  initialData
)
