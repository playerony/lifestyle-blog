export default (date: Date = new Date()): string =>
  new Date(date)
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      year: 'numeric',
      month: '2-digit'
    })
    .replace(new RegExp('/|-', 'g'), '.')
