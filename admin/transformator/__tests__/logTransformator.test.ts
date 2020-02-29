import logTransformator from '../logTransformator'

import ILog from '@type/log/ILog'

describe('logTransformator Transformator', () => {
  it('should return data without informations about data and labels', () => {
    expect(logTransformator([])).toEqual({
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

  it('should return data with grouped labels and data by month', () => {
    expect(logTransformator(LOG_LIST_MOCK)).toEqual({
      labels: ['04.2020', '05.2020'],
      datasets: [
        {
          data: [1, 2],
          label: 'Logs per month',
          backgroundColor: '#48adf1'
        }
      ]
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
