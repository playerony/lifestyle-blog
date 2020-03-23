import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider, wait } from '@apollo/react-testing'

import { LOG_LIST_QUERY } from '@hook/log/useLogList/useLogList.query'

const useTitleMock = jest.fn()
const toggleLoaderMock = jest.fn()

jest.doMock('../../component/LogPage', () => LogPageMock)
jest.doMock('../../hook/utility/useTitle', () => useTitleMock)
jest.doMock('../../hook/context/useLoader', () => () => ({ toggleLoader: toggleLoaderMock }))

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(
    <MemoryRouter>
      <MockedProvider mocks={LOG_LIST_QUERY_MOCK}>
        {element}
      </MockedProvider>
    </MemoryRouter>
  )

const setUp = (): ReactWrapper => {
  const Log = require('../Log').default

  return mountComponent(<Log />)
}

describe('LogPage Page', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = setUp()

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should set a proper document title', () => {
    setUp()

    expect(useTitleMock).toHaveBeenCalledWith('Log')
  })

  describe('loading data', () => {
    it('should return null during data loading', () => {
      const wrapper = setUp()

      expect(wrapper.html()).toEqual('')
    })

    it('should render LogPage Component after data loading', async () => {
      const wrapper = setUp()

      await wait(0)
      wrapper.update()

      expect(wrapper.exists(LogPageMock)).toBeTruthy()
    })

    it('should render LogPage Component with proper prop', async () => {
      const wrapper = setUp()

      await wait(0)
      wrapper.update()

      expect((wrapper.find(LogPageMock).props() as any).logList).toEqual(LOG_LIST_RESULT_DATA.logList)
    })
  })

  it('should call toggleLoader function', () => {
    setUp()

    expect(toggleLoaderMock).toHaveBeenCalledWith(true)
  })
})

const LogPageMock = (): JSX.Element => <h1>Log Page</h1>

const LOG_LIST_RESULT_DATA = {
  logList: [
    {
      createdAt: new Date('2020'),
      __typename: 'Log'
    },
    {
      createdAt: new Date('2019'),
      __typename: 'Log'
    }
  ]
}

const LOG_LIST_QUERY_MOCK = [
  {
    request: {
      query: LOG_LIST_QUERY
    },
    result: { data: LOG_LIST_RESULT_DATA }
  }
]
