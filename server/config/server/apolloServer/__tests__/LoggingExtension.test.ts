import LoggingExtension from '../LoggingExtension'

describe('LoggingExtension class', () => {
  it('should have defined proper fields', () => {
    const classPropertyList = Object.getOwnPropertyNames(
      LoggingExtension.prototype
    )

    expect(classPropertyList).toHaveLength(2)
    expect(classPropertyList).toEqual(['constructor', 'willSendResponse'])
  })
})
