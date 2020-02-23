import React from 'react'
import { renderHook } from '@testing-library/react-hooks'

import ApolloProviderMock from '@component/utility/ApolloProviderMock'

import useVisitorList from '../useVisitorList'

import { VISITOR_LIST_QUERY } from '../useVisitorList/useVisitorList.query'

describe('useVisitorList Hook', () => {
  it('import useVisitorList', () => {
    expect(typeof useVisitorList).toBe('function')
  })

  it('should keep data as null until data is actually returned', async () => {
    const wrapper = ({ children }: any) =>
      <ApolloProviderMock mockList={VISITOR_LIST_MOCK}>{children}</ApolloProviderMock>

    const { result, waitForNextUpdate } = renderHook(() => useVisitorList(), { wrapper })

    expect(result.current).toBeNull()

    await waitForNextUpdate()
    expect(result.current).toEqual(VISITOR_LIST_RESULT_DATA.visitorList)
  })
})

const VISITOR_LIST_RESULT_DATA = {
  visitorList: [
    {
      articleId: 1,
      ipAddress: 'ipAddress',
      userAgent: 'userAgent',
      createdAt: new Date('2020'),
      __typename: 'Visitor'
    },
    {
      articleId: 1,
      ipAddress: 'ipAddress',
      userAgent: 'userAgent',
      createdAt: new Date('2019'),
      __typename: 'Visitor'
    }
  ]
}

const VISITOR_LIST_MOCK = [
  {
    request: {
      query: VISITOR_LIST_QUERY
    },
    result: { data: VISITOR_LIST_RESULT_DATA }
  }
]
