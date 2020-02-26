import { ReactElement } from 'react'

import EToastType from '@type/common/EToastType'

export interface IToastProps {
  toastId: string
  content: string
  type: EToastType
}

export interface IToastProviderProps {
  children: ReactElement | ReactElement[]
}
