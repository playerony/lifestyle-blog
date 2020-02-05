import generateString from '../generateString'

describe('generateString Function', () => {
  it('should return at default random string with 50 characters', () => {
    expect(generateString()).toHaveLength(50)
    expect(generateString()).toHaveLength(50)
    expect(generateString()).toHaveLength(50)
  })

  it('should return a unique value', () => {
    const generatedStringList = new Array(200)
      .fill(1)
      .map(() => generateString())

    expect([...new Set(generatedStringList)]).toHaveLength(200)
  })

  it('should return string with length defined as parameter', () => {
    expect(generateString(1)).toHaveLength(1)
    expect(generateString(0)).toHaveLength(0)
    expect(generateString(20)).toHaveLength(20)
    expect(generateString(5000)).toHaveLength(5000)
  })

  it('should be resistant to negative numbers', () => {
    expect(generateString(-1)).toHaveLength(1)
    expect(generateString(-20)).toHaveLength(20)
    expect(generateString(-5000)).toHaveLength(5000)
  })
})
