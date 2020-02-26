import React, { useState } from 'react'

import EToastType from '@type/common/EToastType'
import { IToastProps, IToastProviderProps } from './ToastProvider.type'

import { ToastContext } from '@context/ToastContext'

const ToastProvider = ({ children }: IToastProviderProps): JSX.Element => {
  const [toastList, setToastList] = useState<IToastProps[]>([])

  const add = (message: string, type: EToastType = EToastType.SUCCESS): void => {
    const toastId = new Date().valueOf()

    setToastList([...toastList, { toastId, type, content: message }])
  }

  const remove = (toastId: number): void =>
    setToastList(toastList.filter(toast => toast.toastId !== toastId))
  
  return (
    <ToastContext.Provider value={{ add, remove }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
