import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import ApolloProviderMock from '@component/utility/ApolloProviderMock'

import useLogList from '../useLogList'

import { LOG_LIST_QUERY } from '../useLogList/useLogList.query'

describe('useLogList Hook', () => {
  it('import useLogList', () => {
    expect(typeof useLogList).toBe('function')
  })

  it('should keep data as null until data is actually returned', async () => {
    const wrapper = ({ children }: any) =>
      <ApolloProviderMock mockList={LOG_LIST_MOCK}>{children}</ApolloProviderMock>

    const { result, waitForNextUpdate } = renderHook(() => useLogList(), { wrapper })

    expect(result.current).toBeNull()

    await waitForNextUpdate()
    expect(result.current).toEqual(LOG_LIST_RESULT_DATA.logList)
  })
})

const LOG_LIST_RESULT_DATA = {
  logList: [
    {
      createdAt: new Date('2020'),
      __typename: 'Log'
    },
  ]
}

const LOG_LIST_MOCK = [
  {
    request: {
      query: LOG_LIST_QUERY
    },
    result: { data: LOG_LIST_RESULT_DATA }
  }
]
