import React from 'react'

import Button from '@component/generic/Button'

import { StyledWrapper } from './Error.style'

const Error = (): JSX.Element => {

  return (
    <StyledWrapper>
      <svg>
        <use xlinkHref="#robot" />
      </svg>
      <Button>
        Refresh
      </Button>
    </StyledWrapper>
  )
}

export default Error
