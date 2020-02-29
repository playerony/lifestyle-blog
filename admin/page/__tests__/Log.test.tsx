import React from 'react'
import { shallow } from 'enzyme'

import LogPage from '@component/LogPage'

import ILog from '@type/log/ILog'

jest.doMock('../../hook/log/useLogList', () => () => LOG_LIST_MOCK)

describe('LogPage Page', () => {
  it('should render', () => {
    const Log = require('../Log').default
    const wrapper = shallow(<Log />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render LogPage Component', () => {
    const Log = require('../Log').default
    const wrapper = shallow(<Log />)

    expect(wrapper.exists(LogPage)).toBeTruthy()
  })

  it('should render LogPage Component with proper data', () => {
    const Log = require('../Log').default
    const wrapper = shallow(<Log />)

    const logPageProps = wrapper.find(LogPage).props()

    expect(Object.keys(logPageProps)).toHaveLength(1)
    expect(logPageProps.logList).toEqual(LOG_LIST_MOCK)
  })
})

const LOG_LIST_MOCK: ILog[] = [
  {
    createdAt: new Date('2020')
  },
  {
    createdAt: new Date('2019')
  }
]
