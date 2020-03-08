export default <T>(key: string = 'name') => (a: T, b: T): number => {
  const nameA = (a[key] || '').trim().toLowerCase()
  const nameB = (b[key] || '').trim().toLowerCase()

  if (nameA < nameB) return -1
  if (nameA > nameB) return 1

  return 0
}
