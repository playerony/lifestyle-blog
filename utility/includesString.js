const prepareValueToCompare = value => (value || '').trim().toLowerCase()

export default (source, phrase) => {
  const formattedSource = prepareValueToCompare(source)
  const formattedCompareWith = prepareValueToCompare(phrase)

  return formattedSource.includes(formattedCompareWith)
}
