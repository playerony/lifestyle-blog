import { groupBy, sortBy } from 'lodash'

import ILog from '@type/log/ILog'

import formatDate from '@utility/formatDate'

import variable from '@style/variable'

export default (logList: ILog[]) => {
  const logListGroupedByMonth = groupBy(sortBy(logList, 'createdAt'), log => {
    const date = new Date(log.createdAt!)

    return new Date(date.getFullYear(), date.getMonth()).getTime()
  })

  const labels = Object.keys(logListGroupedByMonth)
    .map(element => logListGroupedByMonth[element][0])
    .map(log => formatDate(log.createdAt).slice(3))
    .slice(-5)

  const data = Object.keys(logListGroupedByMonth)
    .map(element => logListGroupedByMonth[element].length)
    .slice(-5)

  return {
    labels,
    datasets: [
      {
        data,
        label: 'Logs per month',
        backgroundColor: variable.color.blue500
      }
    ]
  }
}
