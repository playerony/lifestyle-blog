import React from 'react'

import LogPage from '@component/LogPage'

import useLogList from '@hook/log/useLogList'

const Log = (): JSX.Element => {
  const logList = useLogList()

  return <LogPage logList={logList} />
}

export default Log
