import React from 'react'

import LogPage from '@component/LogPage'

import useLogList from '@hook/log/useLogList'
import useLoading from '@hook/utility/useLoading'

const Log = (): JSX.Element | null => {
  const { data, loading } = useLogList()
  const { toggleLoader } = useLoading()
  toggleLoader(loading)

  if (loading) {
    return null
  }

  return <LogPage logList={data} />
}

export default Log
