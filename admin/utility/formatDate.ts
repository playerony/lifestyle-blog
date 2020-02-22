export default (date: Date = new Date()): string =>
  new Date(date).toLocaleDateString().replace(new RegExp('/', 'g'), '.')
