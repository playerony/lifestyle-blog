import { groupBy } from 'lodash'

import ILog from '@type/log/ILog'

import formatDate from '@utility/formatDate'

import variable from '@style/variable'

export default (logList: ILog[]) => {
  const logListGroupedByMonth = groupBy(logList, log => {
    const date = new Date(log.createdAt!)

    return date.getFullYear() + date.getMonth()
  })

  const labels = Object.keys(logListGroupedByMonth)
    .map(element => logListGroupedByMonth[element][0])
    .map(visitor => formatDate(visitor.createdAt).slice(3))

  const data = Object.keys(logListGroupedByMonth).map(
    element => logListGroupedByMonth[element].length
  )

  return {
    labels,
    datasets: [
      {
        label: 'Logs per month',
        borderColor: variable.color.blue500,
        backgroundColor: variable.color.blue500,
        data
      }
    ]
  }
}
