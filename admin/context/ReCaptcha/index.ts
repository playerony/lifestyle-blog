import { Context, createContext } from 'react'

import { IReCaptchaContextProps } from './ReCaptcha.type'

const initialData: IReCaptchaContextProps = {
  execute: () => {}
}

export const ReCaptchaContext: Context<IReCaptchaContextProps> = createContext(
  initialData
)
