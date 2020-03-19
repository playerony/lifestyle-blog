import React from 'react'
import { useParams } from 'react-router-dom'

import Button from '@component/generic/Button'
import Container from '@component/common/Container'

import getErrorMessage from './getErrorMessage'

import { StyledCode, StyledWrapper, StyledDescription } from './Error.style'

const Error = (): JSX.Element => {
  const { code } = useParams<{ code: string }>()

  return (
    <Container>
      <StyledWrapper>
        <svg>
          <use xlinkHref="#robot" />
        </svg>
        <StyledCode>{code}</StyledCode>
        <StyledDescription>{getErrorMessage(code)}</StyledDescription>
        <Button>
          Refresh
        </Button>
      </StyledWrapper>
    </Container>
  )
}

export default Error
