import logTransformator from '../logTransformator'

import ILog from '@type/log/ILog'

describe('logTransformator Transformator', () => {
  it('import logTransformator', () => {
    expect(typeof logTransformator).toEqual('function')
  })

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
      labels: ['04.2020', '05.2020', '06.2020', '07.2020', '08.2020'],
      datasets: [
        {
          data: [1, 2, 1, 1, 1],
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
  },
  {
    createdAt: new Date('03-03-2020')
  },
  {
    createdAt: new Date('02-02-2020')
  },
  {
    createdAt: new Date('01-01-2020')
  },
  {
    createdAt: new Date('06-06-2020')
  },
  {
    createdAt: new Date('07-07-2020')
  },
  {
    createdAt: new Date('08-08-2020')
  }
]
