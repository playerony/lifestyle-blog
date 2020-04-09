export default <T = any>(jsonString: string): T | null => {
  try {
    const result = JSON.parse(jsonString)

    if (result && typeof result === 'object') {
      return result
    }
  } catch {}

  return null
}
