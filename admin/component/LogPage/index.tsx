import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useHistory } from 'react-router-dom'

import Button from '../generic/Button'
import Container from '../common/Container'

import { ILogPageProps } from './LogPage.type'

import logTransformator from '@transformator/logTransformator'

import routeList from '@config/routeList'

import { StyledHeader, StyledArrowIcon, StyledChartWrapper } from './LogPage.style'

const LogPage = ({ logList = [] }: ILogPageProps): JSX.Element => {
  const history = useHistory()
  const logChartData = logTransformator(logList)

  const handleButtonClick = (): void =>
    history.push(routeList.article.list)

  return (
    <Container>
      <StyledHeader>
        Logs per month chart
      </StyledHeader>
      <StyledChartWrapper>
        <Bar data={logChartData} />
      </StyledChartWrapper>
      <Button
        circle={true}
        floating="left"
        onClick={handleButtonClick}
      >
        <StyledArrowIcon>
          <use xlinkHref="#left-arrow-button" />
        </StyledArrowIcon>
      </Button>
    </Container>
  )
}

export default LogPage
