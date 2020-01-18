import ValidationError from '../ValidationError'

describe('ValidationError Class', () => {
  it('should return an error with proper message', () => {
    const object = { example: 'data' }
    const result = new ValidationError(object)

    expect(result.message).toEqual(JSON.stringify(object))
  })
})
