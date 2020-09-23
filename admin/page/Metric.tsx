import React from 'react'

import MetricPage from '@component/MetricPage'
import { withErrorBoundary } from '@component/utility/ErrorBoundary'

import useTitle from '@hook/utility/useTitle'
import useLoader from '@hook/context/useLoader'
import useVisitorList from '@hook/visitor/useVisitorList'

const Metric = (): JSX.Element | null => {
  useTitle('Analiza odwiedzających')

  const { toggleLoader } = useLoader()
  const { data, loading } = useVisitorList()
  toggleLoader(loading)

  if (loading) {
    return null
  }

  return <MetricPage visitorList={data} />
}

export default withErrorBoundary(Metric)
