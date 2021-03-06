import React from 'react'

import LogPage from '@component/LogPage'
import { withErrorBoundary } from '@component/utility/ErrorBoundary'

import useTitle from '@hook/utility/useTitle'
import useLogList from '@hook/log/useLogList'
import useLoader from '@hook/context/useLoader'

const Log = (): JSX.Element | null => {
  useTitle('Analiza logów')

  const { toggleLoader } = useLoader()
  const { data, loading } = useLogList()
  toggleLoader(loading)

  if (loading) {
    return null
  }

  return <LogPage logList={data} />
}

export default withErrorBoundary(Log)
