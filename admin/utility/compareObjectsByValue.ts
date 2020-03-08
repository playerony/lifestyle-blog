export default <T extends object>(key: keyof T) => (a: T, b: T): number => {
  if (!a || !b) {
    return 0
  }

  const nameA = String(a[key] || '').trim().toLowerCase()
  const nameB = String(b[key] || '').trim().toLowerCase()

  if (nameA < nameB) return -1
  if (nameA > nameB) return 1

  return 0
}
