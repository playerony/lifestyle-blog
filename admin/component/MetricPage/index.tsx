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
      <StyledHeader>Miesięczna liczba odwiedzających</StyledHeader>
      <StyledChartWrapper>
        <Bar data={visitorsChartData} />
      </StyledChartWrapper>

      <StyledDoughnutChartHeader>
        Wyświetlenia dla listy artykułów oraz samych artykułów
      </StyledDoughnutChartHeader>
      <Doughnut data={pageVisitorsChartData} />

      <StyledDoughnutChartHeader>
        Z jakich urządzeń korzystają użytkownicy
      </StyledDoughnutChartHeader>
      <Doughnut data={devicesChartData} />

      <BackButton />
    </Container>
  )
}

export default MetricPage
