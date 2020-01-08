export default (text: any): boolean =>
  typeof text === 'string' || text instanceof String
