export default date =>
  new Date(date).toLocaleString('default', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
