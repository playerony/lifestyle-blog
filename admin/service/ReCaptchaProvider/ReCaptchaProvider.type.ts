import { ReactElement } from 'react'

export interface IReCaptchaProviderProps {
  onVerify: () => void
  children: ReactElement | ReactElement[]
}
