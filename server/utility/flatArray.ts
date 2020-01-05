const flatArray = (array?: Array<any> | null): Array<any> => {
  if (!array || array.length === 0) {
    return []
  }

  return array.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatArray(b) : b),
    []
  )
}

export default flatArray
