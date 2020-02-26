import React, { useState } from 'react'

import Toast from '@component/common/Toast'

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

  const renderToastList = (): JSX.Element[] =>
    React.Children.toArray(
      toastList.map(({ type, toastId, content }) => (
        <Toast
          type={type}
          content={content}
          onClick={() => remove(toastId)}
        />
      ))
    )

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      {renderToastList()}
    </ToastContext.Provider>
  )
}

export default ToastProvider
