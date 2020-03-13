import generateUniqueID from '../generateUniqueID'

const numberOfTests = 1000

describe('generateUniqueID Function', () => {
  it('should return each time unique id', () => {
    const result: string[] = []

    for (let i = 0; i < numberOfTests; i++) {
      result.push(generateUniqueID())
    }

    expect([...new Set(result)]).toHaveLength(numberOfTests)
  })
})
