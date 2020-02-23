import React from 'react'

import { IMetricPageProps } from './MetricPage.type'

const MetricPage = ({ visitorList = [] }: IMetricPageProps): JSX.Element => {
  console.warn(visitorList)

  return <div />
}

export default MetricPage
