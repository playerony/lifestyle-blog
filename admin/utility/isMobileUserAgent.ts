const toMatch = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
]

export default (userAgent: string): boolean =>
  toMatch.some(toMatchItem => {
    return userAgent.match(toMatchItem)
  })
