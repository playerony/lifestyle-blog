import React from 'react'

import MetricPage from '@component/MetricPage'

import useLoading from '@hook/utility/useLoading'
import useVisitorList from '@hook/visitor/useVisitorList'

const Metric = (): JSX.Element | null => {
  const { toggleLoader } = useLoading()

  const { data, loading } = useVisitorList()
  toggleLoader(loading)

  if (loading) {
    return null
  }

  return <MetricPage visitorList={data} />
}

export default Metric
