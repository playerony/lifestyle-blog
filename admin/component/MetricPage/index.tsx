import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'

import Container from '../common/Container'

import { IMetricPageProps } from './MetricPage.type'

import metricTransformator from '@admin/transformator/metricTransformator'

const MetricPage = ({ visitorList = [] }: IMetricPageProps): JSX.Element => {
  const { lineChartData, blogVisitorChartData, visitorDeviceChartData } = metricTransformator(visitorList)

  return (
    <Container>
      <Bar data={lineChartData} />
      <Doughnut data={blogVisitorChartData} />
      <Doughnut data={visitorDeviceChartData} />
    </Container>
  )
}

export default MetricPage
