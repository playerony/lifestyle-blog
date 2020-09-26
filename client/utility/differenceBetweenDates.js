const addSuffix = (base, value) =>
  `${value} ${value > 1 ? base[1] : base[0]} temu`

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
    return addSuffix(['rok', 'lata'], years)
  } else if (months > 1) {
    return addSuffix(['miesiąc', 'miesiące'], months)
  } else if (days > 1) {
    return addSuffix(['dzień', 'dni'], days)
  } else if (hours > 1) {
    return addSuffix(['godzinę', 'godziny'], hours)
  } else if (minutes > 1) {
    return addSuffix(['minutę', 'minuty'], minutes)
  } else if (seconds > 1) {
    return addSuffix(['sekunda', 'sekundy'], seconds)
  }

  return 'A moment ago'
}
