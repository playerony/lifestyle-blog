import { Bar } from 'react-chartjs-2'
import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'

import LogPage from '../LogPage'
import BackButton from '../common/BackButton'
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
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render', () => {
    const wrapper = mountComponent(<LogPage />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render header', () => {
    const wrapper = mountComponent(<LogPage />)

    expect(wrapper.exists('h1')).toBeTruthy()
    expect(wrapper.find('h1').props().children).toEqual(
      'Wykres przedstawiający liczbę logów dla każdego miesiąca'
    )
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
            label: 'Liczba logów w miesiącu',
            backgroundColor: '#48adf1'
          }
        ]
      })
    })

    it('should render Bar chart with parsed data', () => {
      const wrapper = mountComponent(<LogPage logList={LOG_LIST_MOCK} />)

      expect(wrapper.find(Bar).props().data).toEqual({
        labels: ['04.2020', '05.2020'],
        datasets: [
          {
            data: [1, 2],
            label: 'Liczba logów w miesiącu',
            backgroundColor: '#48adf1'
          }
        ]
      })
    })
  })

  it('should render BackButton', () => {
    const wrapper = mountComponent(<LogPage />)

    expect(wrapper.exists(BackButton)).toBeTruthy()
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
