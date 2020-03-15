import React, { ReactElement } from 'react'
import { mount, ReactWrapper } from 'enzyme'
import { Bar, Doughnut } from 'react-chartjs-2'

import MetricPage from '../MetricPage'
import Button from '../generic/Button'
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

      expect(wrapper.find('h1').first().props().children).toEqual('Total visitors per month')
    })

    it('should render Total visitors chart without a visitorList prop', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find(Bar).props().data).toEqual({
        datasets: [
          {
            backgroundColor: '#48adf1',
            borderColor: '#48adf1',
            data: [],
            label: 'Visitors per month'
          }
        ],
        labels: []
      })
    })

    it('should render Total visitors chart with parsed data', () => {
      const wrapper = mountComponent(<MetricPage visitorList={VISITOR_LIST_MOCK} />)

      expect(wrapper.find(Bar).props().data).toEqual({
        datasets: [
          {
            backgroundColor: '#48adf1',
            borderColor: '#48adf1',
            data: [3],
            label: 'Visitors per month'
          }
        ],
        labels: ['01.2020']
      })
    })
  })

  describe('Visitors per page chart', () => {
    it('should render', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find(Doughnut).first().exists()).toBeTruthy()
    })

    it('should render header', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find('h1').get(1).props.children).toEqual('Visitors for the article and list page')
    })

    it('should render Total visitors chart without a visitorList prop', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find(Doughnut).first().props().data).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Total', 'Article page', 'Article list page']
      })
    })

    it('should render Total visitors chart with parsed data', () => {
      const wrapper = mountComponent(<MetricPage visitorList={VISITOR_LIST_MOCK} />)

      expect(wrapper.find(Doughnut).first().props().data).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [3, 2, 1]
          }
        ],
        labels: ['Total', 'Article page', 'Article list page']
      })
    })
  })

  describe('Devices chart chart', () => {
    it('should render', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find(Doughnut).last().exists()).toBeTruthy()
    })

    it('should render header', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find('h1').last().props().children).toEqual('What devices users use')
    })

    it('should render Devices chart without a visitorList prop', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.find(Doughnut).last().props().data).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [0, 0, 0]
          }
        ],
        labels: ['Tablet', 'Mobile', 'Desktop']
      })
    })

    it('should render Devices chart with parsed data', () => {
      const wrapper = mountComponent(<MetricPage visitorList={VISITOR_LIST_MOCK} />)

      expect(wrapper.find(Doughnut).last().props().data).toEqual({
        datasets: [
          {
            backgroundColor: ['#48adf1', '#48f1b4', '#ccccff'],
            data: [2, 1, 0]
          }
        ],
        labels: ['Tablet', 'Mobile', 'Desktop']
      })
    })
  })

  describe('Button Component', () => {
    it('should render', () => {
      const wrapper = mountComponent(<MetricPage />)

      expect(wrapper.exists(Button)).toBeTruthy()
    })

    it('should render Button Component', () => {
      const wrapper = mountComponent(<MetricPage />)

      const buttonProps = wrapper.find(Button).props()
      expect(buttonProps.circle).toBeTruthy()
      expect(buttonProps.onClick).toBeDefined()
      expect(buttonProps.floating).toEqual('left')
      expect(wrapper.find(Button).find('use').props().xlinkHref).toEqual('#left-arrow-button')
    })
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
