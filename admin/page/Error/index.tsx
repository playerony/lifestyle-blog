import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import Button from '@component/generic/Button'
import Container from '@component/common/Container'

import getErrorMessage from './getErrorMessage'

import routeList from '@config/routeList'

import { StyledCode, StyledWrapper, StyledDescription } from './Error.style'

const Error = (): JSX.Element => {
  const history = useHistory()
  const { code } = useParams<{ code: string }>()

  const handleRefreshClick = (): void => history.push(routeList.base)

  return (
    <Container>
      <StyledWrapper>
        <svg>
          <use xlinkHref="#robot" />
        </svg>
        <StyledCode>{code}</StyledCode>
        <StyledDescription>{getErrorMessage(code)}</StyledDescription>
        <Button onClick={handleRefreshClick}>
          Refresh
        </Button>
      </StyledWrapper>
    </Container>
  )
}

export default Error
