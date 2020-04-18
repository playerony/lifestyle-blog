export default jsonString => {
  try {
    const result = JSON.parse(jsonString)

    if (result && typeof result === 'object') {
      return result
    }
  } catch {
    return null
  }

  return null
}
