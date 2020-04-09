export default <T = any>(jsonString: string): T | null => {
  try {
    var result = JSON.parse(jsonString)

    if (result && typeof result === 'object') {
      return result
    }
  } catch {}

  return null
}
