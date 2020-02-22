const toMatch = [
  /BB10/i,
  /iPod/i,
  /webOS/i,
  /Lumia/i,
  /Mobile/i,
  /iPhone/i,
  /Android/i,
  /PlayBook/i,
  /BlackBerry/i,
  /Opera Mini/i,
  /Windows Phone/i
]

export default (userAgent: string): boolean =>
  toMatch.some(toMatchItem => {
    return userAgent.match(toMatchItem)
  })
