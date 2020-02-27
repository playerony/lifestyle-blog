import React, { useState } from 'react'

import Toast from '@component/common/Toast'

import EToastType from '@type/common/EToastType'
import { IToastProps, IToastProviderProps } from './ToastProvider.type'

import { ToastContext } from '@context/ToastContext'

import generateUnqiueID from '@utility/generateUnqiueID'

import { StyledToastListWrapper } from './ToastProvider.style'

const ToastProvider = ({ children }: IToastProviderProps): JSX.Element => {
  const [toastList, setToastList] = useState<IToastProps[]>([])

  const add = (message: string, type: EToastType = EToastType.SUCCESS): void => {
    const toastId = generateUnqiueID()

    setToastList([...toastList, { toastId, type, content: message }])
  }

  const remove = (toastId: string): void =>
    setToastList(toastList.filter(toast => toast.toastId !== toastId))

  const renderToastList = (): JSX.Element[] =>
    toastList.map(({ type, toastId, content }) => (
      <Toast
        type={type}
        content={content}
        key={`${type}_${toastId}`}
        onClick={() => remove(toastId)}
      />
    ))

  return (
    <ToastContext.Provider value={{ add }}>
      {children}
      <StyledToastListWrapper>
        {renderToastList()}
      </StyledToastListWrapper>
    </ToastContext.Provider>
  )
}

export default ToastProvider
