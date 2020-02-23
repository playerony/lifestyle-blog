import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import Container from '../common/Container'

import { IMetricPageProps } from './MetricPage.type'

import appMetricTransformator from '@transformator/appMetricTransformator'

const MetricPage = ({ visitorList = [] }: IMetricPageProps): JSX.Element => {
  const { blogVisitorChartData, visitorDeviceChartData } = appMetricTransformator(visitorList)

  return (
    <Container>
      <Doughnut data={blogVisitorChartData} />
      <Doughnut data={visitorDeviceChartData} />
    </Container>
  )
}

export default MetricPage
