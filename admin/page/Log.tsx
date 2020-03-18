import React from 'react'

import LogPage from '@component/LogPage'

import useLogList from '@hook/log/useLogList'
import useLoader from '@hook/context/useLoader'

const Log = (): JSX.Element | null => {
  const { data, loading } = useLogList()
  const { toggleLoader } = useLoader()
  toggleLoader(loading)

  if (loading) {
    return null
  }

  return <LogPage logList={data} />
}

export default Log
