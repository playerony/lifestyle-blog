import React from 'react'
import { Bar } from 'react-chartjs-2'

import Container from '../common/Container'

import { ILogPageProps } from './LogPage.type'

import logTransformator from '@transformator/logTransformator'

const LogPage = ({ logList = [] }: ILogPageProps): JSX.Element => {
  const logChartData = logTransformator(logList)

  return (
    <Container>
      <Bar data={logChartData} />
    </Container>
  )
}

export default LogPage
