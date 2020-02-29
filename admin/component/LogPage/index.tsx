import React from 'react'
import { Bar } from 'react-chartjs-2'

import Container from '../common/Container'

import { ILogPageProps } from './LogPage.type'

import logTransformator from '@transformator/logTransformator'

import { StyledHeader, StyledChartWrapper } from './LogPage.style'

const LogPage = ({ logList = [] }: ILogPageProps): JSX.Element => {
  const logChartData = logTransformator(logList)

  return (
    <Container>
      <StyledHeader>
        Logs per month chart
      </StyledHeader>
      <StyledChartWrapper>
        <Bar data={logChartData} />
      </StyledChartWrapper>
    </Container>
  )
}

export default LogPage