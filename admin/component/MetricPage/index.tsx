import React from 'react'
import { useHistory } from 'react-router-dom'
import { Bar, Doughnut } from 'react-chartjs-2'

import Button from '../generic/Button'
import Container from '../common/Container'

import { IMetricPageProps } from './MetricPage.type'

import metricTransformator from '@transformator/metricTransformator'

import { StyledArrowIcon, StyledChartWrapper } from './MetricPage.style'

const MetricPage = ({ visitorList = [] }: IMetricPageProps): JSX.Element => {
  const history = useHistory()
  const {
    lineChartData,
    blogVisitorChartData,
    visitorDeviceChartData
  } = metricTransformator(visitorList)

  const handleButtonClick = (): void =>
    history.goBack()

  return (
    <Container>
      <StyledChartWrapper>
        <Bar data={lineChartData} />
      </StyledChartWrapper>
      <Doughnut data={blogVisitorChartData} />
      <Doughnut data={visitorDeviceChartData} />
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
