export default (number: any): boolean =>
  typeof number === 'number' && !isNaN(Number(number))
