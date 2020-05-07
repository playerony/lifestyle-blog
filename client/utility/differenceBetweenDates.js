const addSuffix = (base, value) => `${value} ${base}${value > 1 ? 's' : ''} ago`

export default (source, compareWith = new Date()) => {
  const sourceDate = source ? source : new Date()
  const difference = Math.abs(compareWith - new Date(sourceDate))

  const years = Math.ceil(difference / 31536000000)
  const months = Math.ceil(difference / 2628000000)
  const days = Math.ceil(difference / 87600000)
  const hours = Math.ceil(difference / 3650000)
  const minutes = Math.ceil(difference / 60830)
  const seconds = Math.ceil(difference / 1013)

  if (years > 1) {
    return addSuffix('year', years)
  } else if (months > 1) {
    return addSuffix('month', months)
  } else if (days > 1) {
    return addSuffix('day', days)
  } else if (hours > 1) {
    return addSuffix('hour', hours)
  } else if (minutes > 1) {
    return addSuffix('minute', minutes)
  } else if (seconds > 1) {
    return addSuffix('second', seconds)
  }

  return 'A moment ago'
}
