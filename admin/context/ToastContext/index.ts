import { Context, createContext } from 'react'

import { IToastContextProps } from './ToastContext.type'

const initialData: IToastContextProps | null = null

export const ToastContext: Context<IToastContextProps | null> = createContext<IToastContextProps | null>(
  initialData
)
