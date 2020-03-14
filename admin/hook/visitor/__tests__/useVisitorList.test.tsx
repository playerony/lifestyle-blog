import React from 'react'
import { MockedProvider } from '@apollo/react-testing'
import { renderHook } from '@testing-library/react-hooks'

import useVisitorList from '../useVisitorList'

import { VISITOR_LIST_QUERY } from '../useVisitorList/useVisitorList.query'

describe('useVisitorList Hook', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('import useVisitorList', () => {
    expect(typeof useVisitorList).toBe('function')
  })

  it('should return undefined as data if loading status is true', () => {
    const wrapper = ({ children }: any) =>
      <MockedProvider mocks={VISITOR_LIST_MOCK}>{children}</MockedProvider>

    const { result } = renderHook(() => useVisitorList(), { wrapper })

    expect(result.current).toEqual({ data: undefined, loading: true })
  })

  it('should return proper data if loading status is false', async () => {
    const wrapper = ({ children }: any) =>
      <MockedProvider mocks={VISITOR_LIST_MOCK}>{children}</MockedProvider>

    const { result, waitForNextUpdate } = renderHook(() => useVisitorList(), { wrapper })

    await waitForNextUpdate()
    expect(result.current).toEqual({ data: VISITOR_LIST_RESULT_DATA.visitorList, loading: false })
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
