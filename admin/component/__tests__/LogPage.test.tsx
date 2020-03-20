import { Bar } from 'react-chartjs-2'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import LogPage from '../LogPage'
import Button from '../generic/Button'
import ThemeProviderMock from '../utility/ThemeProviderMock'

import ILog from '@type/log/ILog'

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom')

  return {
    __esModule: true,
    ...originalModule,
    useHistory: () => ({ push: jest.fn() })
  }
})

const mountComponent = (element: ReactElement): ReactWrapper =>
  mount(<ThemeProviderMock>{element}</ThemeProviderMock>)

describe('LogPage Component', () => {
  it('should render', () => {
    const wrapper = mountComponent(<LogPage />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper = mountComponent(<LogPage />)

    expect(wrapper.exists('h1')).toBeTruthy()
    expect(wrapper.find('h1').props().children).toEqual('Logs per month chart')
  })

  describe('Button Component', () => {
    it('should render', () => {
      const wrapper = mountComponent(<LogPage />)

      expect(wrapper.exists(Button)).toBeTruthy()
    })

    it('should render Button Component', () => {
      const wrapper = mountComponent(<LogPage />)

      const buttonProps = wrapper.find(Button).props()
      expect(buttonProps.circle).toBeTruthy()
      expect(buttonProps.onClick).toBeDefined()
      expect(buttonProps.floating).toEqual('left')
      expect(wrapper.find(Button).find('use').props().xlinkHref).toEqual('#left-arrow')
    })
  })

  describe('Chart Component', () => {
    it('should render Bar chart', () => {
      const wrapper = mountComponent(<LogPage />)

      expect(wrapper.exists(Bar)).toBeTruthy()
    })

    it('should render Bar chart without a logList prop', () => {
      const wrapper = mountComponent(<LogPage />)

      expect(wrapper.find(Bar).props().data).toEqual({
        labels: [],
        datasets: [
          {
            data: [],
            label: 'Logs per month',
            backgroundColor: '#48adf1'
          }
        ]
      })
    })

    it('should render Bar chart with parsed data', () => {
      const wrapper = mountComponent(<LogPage logList={LOG_LIST_MOCK} />)

      expect(wrapper.find(Bar).props().data).toEqual({
        labels: ['05.2020', '04.2020'],
        datasets: [
          {
            data: [2, 1],
            label: 'Logs per month',
            backgroundColor: '#48adf1'
          }
        ]
      })
    })
  })
})

const LOG_LIST_MOCK: ILog[] = [
  {
    createdAt: new Date('05-05-2020')
  },
  {
    createdAt: new Date('04-04-2020')
  },
  {
    createdAt: new Date('05-05-2020')
  }
]
