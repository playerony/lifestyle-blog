import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'

import Container from '../common/Container'
import BackButton from '../common/BackButton'

import { IMetricPageProps } from './MetricPage.type'

import metricTransformator from '@transformator/metricTransformator'

import {
  StyledHeader,
  StyledChartWrapper,
  StyledDoughnutChartHeader
} from './MetricPage.style'

const MetricPage = ({ visitorList = [] }: IMetricPageProps): JSX.Element => {
  const {
    devicesChartData,
    visitorsChartData,
    pageVisitorsChartData
  } = metricTransformator(visitorList)

  return (
    <Container>
      <StyledHeader>
        Total visitors per month
      </StyledHeader>
      <StyledChartWrapper>
        <Bar data={visitorsChartData} />
      </StyledChartWrapper>

      <StyledDoughnutChartHeader>
        Visitors for the article and list page
      </StyledDoughnutChartHeader>
      <Doughnut data={pageVisitorsChartData} />

      <StyledDoughnutChartHeader>
        What devices users use
      </StyledDoughnutChartHeader>
      <Doughnut data={devicesChartData} />

      <BackButton />
    </Container>
  )
}

export default MetricPage
