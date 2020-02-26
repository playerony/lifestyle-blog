import { ReactElement } from 'react'

import EToastType from '@type/common/EToastType'

export interface IToastProps {
  toastId: number
  content: string
  type: EToastType
}

export interface IToastProviderProps {
  children: ReactElement | ReactElement[]
}
