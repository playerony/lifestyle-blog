const toMatch = [/iPad/i, /Tablet/i]

export default (userAgent: string): boolean =>
  toMatch.some(toMatchItem => {
    return userAgent.match(toMatchItem)
  })
