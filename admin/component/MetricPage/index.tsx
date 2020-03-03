import React from 'react'
import { useHistory } from 'react-router-dom'
import { Bar, Doughnut } from 'react-chartjs-2'

import Button from '../generic/Button'
import Container from '../common/Container'

import { IMetricPageProps } from './MetricPage.type'

import metricTransformator from '@transformator/metricTransformator'

import {
  StyledHeader,
  StyledArrowIcon,
  StyledChartWrapper,
  StyledDoughnutChartHeader
} from './MetricPage.style'

const MetricPage = ({ visitorList = [] }: IMetricPageProps): JSX.Element => {
  const history = useHistory()
  const {
    devicesChartData,
    visitorsChartData,
    pageVisitorsChartData
  } = metricTransformator(visitorList)

  const handleButtonClick = (): void =>
    history.goBack()

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

export default MetricPage
