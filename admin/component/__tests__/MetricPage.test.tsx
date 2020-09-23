import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { Bar, Doughnut } from 'react-chartjs-2'

import MetricPage from '../MetricPage'
import BackButton from '../common/BackButton'
import ThemeProviderMock from '../utility/ThemeProviderMock'

import IVisitor from '@type/visitor/IVisitor'

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

describe('MetricPage Component', () => {
  beforeAll(() => {
    console.error = jest.fn()
  })

  it('should render without parameters', () => {
    const wrapper = mountComponent(<MetricPage />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render with empty visitorList parameter', () => {
    const wrapper = mountComponent(<MetricPage visitorList={[]} />)

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Total visitors chart', () => {
    it('should render', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.exists(Bar)).toBeTruthy()
    })

    it('should render header', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(
        wrapper
          .find('h1')
          .first()
          .props().children
      ).toEqual('Miesięczna liczba wejść')
    })

    it('should render Total visitors chart without a visitorList prop', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find(Bar).props().data).toEqual({
        datasets: [
          {
            backgroundColor: '#48adf1',
            borderColor: '#48adf1',
            data: [],
            label: 'Miesięczna liczba wejść'
          }
        ],
        labels: []
      })
    })

    it('should render Total visitors chart with parsed data', () => {
      const wrapper = mountComponent(
        <MetricPage visitorList={VISITOR_LIST_MOCK} />
      )

      expect(wrapper.find(Bar).props().data).toEqual({
        datasets: [
          {
            backgroundColor: '#48adf1',
            borderColor: '#48adf1',
            data: [3],
            label: 'Miesięczna liczba wejść'
          }
        ],
        labels: ['01.2020']
      })
    })
  })

  describe('Visitors per page chart', () => {
    it('should render', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(
        wrapper
          .find(Doughnut)
          .first()
          .exists()
      ).toBeTruthy()
    })

    it('should render header', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find('h1').get(1).props.children).toEqual(
        'Ludzie którzy weszli na stronę przeczytać jakieś artykuł'
      )
    })

    it('should render Total visitors chart without a visitorList prop', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(
        wrapper
          .find(Doughnut)
          .first()
          .props().data
      ).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Całkowita', 'Strona artykułu', 'Lista artykułów']
      })
    })

    it('should render Total visitors chart with parsed data', () => {
      const wrapper = mountComponent(
        <MetricPage visitorList={VISITOR_LIST_MOCK} />
      )

      expect(
        wrapper
          .find(Doughnut)
          .first()
          .props().data
      ).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [3, 2, 1]
          }
        ],
        labels: ['Całkowita', 'Strona artykułu', 'Lista artykułów']
      })
    })
  })

  describe('Devices chart chart', () => {
    it('should render', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(
        wrapper
          .find(Doughnut)
          .last()
          .exists()
      ).toBeTruthy()
    })

    it('should render header', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(
        wrapper
          .find('h1')
          .last()
          .props().children
      ).toEqual('Z jakich urządzeń korzystają użytkownicy')
    })

    it('should render Devices chart without a visitorList prop', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(
        wrapper
          .find(Doughnut)
          .last()
          .props().data
      ).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Tablet', 'Telefon', 'Komputer']
      })
    })

    it('should render Devices chart with parsed data', () => {
      const wrapper = mountComponent(
        <MetricPage visitorList={VISITOR_LIST_MOCK} />
      )

      expect(
        wrapper
          .find(Doughnut)
          .last()
          .props().data
      ).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [2, 1, 0]
          }
        ],
        labels: ['Tablet', 'Telefon', 'Komputer']
      })
    })
  })

  it('should render BackButton', () => {
    const wrapper = mountComponent(
      <MetricPage visitorList={VISITOR_LIST_MOCK} />
    )

    expect(wrapper.exists(BackButton)).toBeTruthy()
  })
})

const VISITOR_LIST_MOCK: IVisitor[] = [
  {
    visitorId: 1,
    articleId: null,
    ipAddress: 'ipAddress1',
    createdAt: new Date('2020'),
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    visitorId: 2,
    articleId: 1,
    ipAddress: 'ipAddress2',
    createdAt: new Date('2020'),
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
  },
  {
    visitorId: 3,
    articleId: 1,
    ipAddress: 'ipAddress3',
    createdAt: new Date('2020'),
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36'
  }
]
