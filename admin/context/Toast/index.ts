import { Context, createContext } from 'react'

import { IToastContextProps } from './Toast.type'

const initialData: IToastContextProps = {
  add: (message: string) => {}
}

export const ToastContext: Context<IToastContextProps> = createContext(
  initialData
)
