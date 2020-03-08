import generateUniqueID from '../generateUniqueID'

describe('generateUniqueID Function', () => {
  it('should return each time unique id', () => {
    const result: string[] = []

    for (let i = 0; i < 500; i++) {
      result.push(generateUniqueID())
    }

    expect([...new Set(result)]).toHaveLength(500)
  })
})
