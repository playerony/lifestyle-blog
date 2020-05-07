const prepareValueToCompare = value => (value || '').trim().toLowerCase()

export default (source, compareWith) => {
  const formattedSource = prepareValueToCompare(source)
  const formattedCompareWith = prepareValueToCompare(compareWith)

  return formattedSource.includes(formattedCompareWith)
}
