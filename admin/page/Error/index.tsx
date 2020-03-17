import React from 'react'
import { useParams } from 'react-router-dom'

import Button from '@component/generic/Button'

import getErrorMessage from './getErrorMessage'

import { StyledWrapper } from './Error.style'

const Error = (): JSX.Element => {
  const { code } = useParams<{ code: string }>()

  return (
    <StyledWrapper>
      <svg>
        <use xlinkHref="#robot" />
      </svg>
      <h1>{code}</h1>
      <label>{getErrorMessage(code)}</label>
      <Button>
        Refresh
      </Button>
    </StyledWrapper>
  )
}

export default Error
