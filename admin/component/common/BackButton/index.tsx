import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '../../generic/Button'

import routeList from '@config/routeList'

import { StyledArrowIcon } from './BackButton.style'

const BackButton = (): JSX.Element => {
  const history = useHistory()

  const handleButtonClick = (): void => history.push(routeList.article.list)

  return (
    <Button circle={true} floating="left" onClick={handleButtonClick}>
      <StyledArrowIcon>
        <use xlinkHref="#left-arrow" />
      </StyledArrowIcon>
    </Button>
  )
}

export default BackButton
