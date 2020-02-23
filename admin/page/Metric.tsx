import React from 'react'

import MetricPage from '@component/MetricPage'

import useVisitorList from '@hook/visitor/useVisitorList'

const Metric = (): JSX.Element => {
  const visitorList = useVisitorList()

  return <MetricPage visitorList={visitorList} />
}

export default Metric
