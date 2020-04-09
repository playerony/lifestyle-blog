export default <T>(jsonString: string): boolean | T => {
  try {
    var result = JSON.parse(jsonString)

    if (result && typeof result === 'object') {
      return result
    }
  } catch {}

  return false
}
