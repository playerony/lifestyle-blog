import React from 'react'

import MetricPage from '@component/MetricPage'

import useLoader from '@hook/context/useLoader'
import useVisitorList from '@hook/visitor/useVisitorList'

const Metric = (): JSX.Element | null => {
  const { toggleLoader } = useLoader()

  const { data, loading } = useVisitorList()
  toggleLoader(loading)

  if (loading) {
    return null
  }

  return <MetricPage visitorList={data} />
}

export default Metric
