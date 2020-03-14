import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

import useLogList from '../useLogList'

import { LOG_LIST_QUERY } from '../useLogList/useLogList.query'

describe('useLogList Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useLogList', () => {
    expect(typeof useLogList).toBe('function')
  })

  it('should return undefined as data if loading status is true', () => {
    const wrapper = ({ children }: any) =>
      <MockedProvider mocks={LOG_LIST_MOCK}>{children}</MockedProvider>

    const { result } = renderHook(() => useLogList(), { wrapper })

    expect(result.current).toEqual({ data: undefined, loading: true })
  })

  it('should return proper data if loading status is false', async () => {
    const wrapper = ({ children }: any) =>
      <MockedProvider mocks={LOG_LIST_MOCK}>{children}</MockedProvider>

    const { result, waitForNextUpdate } = renderHook(() => useLogList(), { wrapper })

    await waitForNextUpdate()
    expect(result.current).toEqual({ data: LOG_LIST_RESULT_DATA.logList, loading: false })
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
