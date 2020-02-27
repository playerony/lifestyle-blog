import { Context, createContext } from 'react'

import { IToastProps } from './Toast.type'

const initialData: IToastProps = {
  add: (message: string) => {}
}

export const ToastContext: Context<IToastProps> = createContext(initialData)
