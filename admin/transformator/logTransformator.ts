import { sortBy, groupBy } from 'lodash'

import ILog from '@type/log/ILog'

import formatDate from '@utility/formatDate'

import { LOG_CHART_RECORDS_LIMIT } from '@config/constant'

import variable from '@style/variable'

export default (logList: ILog[]) => {
  const logListGroupedByMonth = groupBy(sortBy(logList, 'createdAt'), log => {
    const date = new Date(log.createdAt!)

    return new Date(date.getFullYear(), date.getMonth()).getTime()
  })

  const labels = Object.keys(logListGroupedByMonth)
    .map(element => logListGroupedByMonth[element][0])
    .map(log => formatDate(log.createdAt).slice(3))
    .slice(LOG_CHART_RECORDS_LIMIT)

  const data = Object.keys(logListGroupedByMonth)
    .map(element => logListGroupedByMonth[element].length)
    .slice(LOG_CHART_RECORDS_LIMIT)

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
