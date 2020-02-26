import React from 'react'

import { IToastProps } from './Toast.type'

import useTimeout from '@hook/utility/useTimeout'

import { StyledWrapper } from './Toast.style'

const Toast = ({ type, content, onClick }: IToastProps): JSX.Element => {
  useTimeout(onClick, 2000)

  return (
    <StyledWrapper type={type} onClick={onClick}>
      {content}
    </StyledWrapper>
  )
}

export default React.memo(Toast)
