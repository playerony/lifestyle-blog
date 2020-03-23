import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider, wait } from '@apollo/react-testing'

import { VISITOR_LIST_QUERY } from '@hook/visitor/useVisitorList/useVisitorList.query'

const useTitleMock = jest.fn()
const toggleLoaderMock = jest.fn()

jest.doMock('../../hook/utility/useTitle', () => useTitleMock)
jest.doMock('../../component/MetricPage', () => MetricPageMock)
jest.doMock('../../hook/context/useLoader', () => () => ({ toggleLoader: toggleLoaderMock }))

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(
    <MemoryRouter>
      <MockedProvider mocks={VISITOR_LIST_QUERY_MOCK}>
        {element}
      </MockedProvider>
    </MemoryRouter>
  )

const setUp = (): ReactWrapper => {
  const Metric = require('../Metric').default

  return mountComponent(<Metric />)
}

describe('Metric Page', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should set a proper document title', () => {
    setUp()

    expect(useTitleMock).toHaveBeenCalledWith('Metric')
  })

  describe('loading data', () => {
    it('should return null during data loading', () => {
      const wrapper = setUp()

      expect(wrapper.html()).toEqual('')
    })

    it('should render MetricPage Component after data loading', async () => {
      const wrapper = setUp()

      await wait(0)
      wrapper.update()

      expect(wrapper.exists(MetricPageMock)).toBeTruthy()
    })

    it('should render MetricPage Component with proper prop', async () => {
      const wrapper = setUp()

      await wait(0)
      wrapper.update()

      expect((wrapper.find(MetricPageMock).props() as any).visitorList).toEqual(VISITOR_LIST_RESULT_DATA.visitorList)
    })
  })

  it('should call toggleLoader function', () => {
    setUp()

    expect(toggleLoaderMock).toHaveBeenCalledWith(true)
  })
})

const MetricPageMock = (): JSX.Element => <h1>Metric Page</h1>

const VISITOR_LIST_RESULT_DATA = {
  visitorList: [
    {
      articleId: 1,
      userAgent: 'userAgent',
      ipAddress: 'ipAddress',
      createdAt: new Date('2020'),
      __typename: 'Visitor'
    },
    {
      articleId: 1,
      userAgent: 'userAgent',
      ipAddress: 'ipAddress',
      createdAt: new Date('2019'),
      __typename: 'Visitor'
    }
  ]
}

const VISITOR_LIST_QUERY_MOCK = [
  {
    request: {
      query: VISITOR_LIST_QUERY
    },
    result: { data: VISITOR_LIST_RESULT_DATA }
  }
]
