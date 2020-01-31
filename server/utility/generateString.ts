const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
const CHARACTERS_LENGTH = CHARACTERS.length

export default (length: number = 50): string => 
  new Array(length).fill(1)
    .reduce(result => {
      const randomCharacter = CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS_LENGTH))

      return `${result}${randomCharacter}`
    }, '')
