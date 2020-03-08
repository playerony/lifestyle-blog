import compareObjectsByValue from '../compareObjectsByValue'

interface ICompareObject {
  name: string
}

describe('compareObjectsByValue Function', () => {
  describe('return 0', () => {
    it('if one of the objects does not exist', () => {
      const result = compareObjectsByValue<ICompareObject>('name')(
        null as any,
        { name: 'name' }
      )

      expect(result).toEqual(0)
    })

    it('if passed object values are the same', () => {
      const result = compareObjectsByValue<ICompareObject>('name')(
        { name: 'name' },
        { name: 'name' }
      )

      expect(result).toEqual(0)
    })
  })

  it('should trim found object property', () => {
    const result = compareObjectsByValue<ICompareObject>('name')(
      { name: '          name' },
      { name: 'name' }
    )

    expect(result).toEqual(0)
  })

  it('should convert to the lower case found object property', () => {
    const result = compareObjectsByValue<ICompareObject>('name')(
      { name: 'Name' },
      { name: 'name' }
    )

    expect(result).toEqual(0)
  })

  it('should return -1 if first value is grater than second', () => {
    const result = compareObjectsByValue<ICompareObject>('name')(
      { name: 'Name1' },
      { name: '    name2' }
    )

    expect(result).toEqual(-1)
  })

  it('should return 1 if second value is grater than first', () => {
    const result = compareObjectsByValue<ICompareObject>('name')(
      { name: 'Name2' },
      { name: '    name1' }
    )

    expect(result).toEqual(1)
  })

  it('should compare empty strings if object key does not exist', () => {
    const result = compareObjectsByValue<ICompareObject>('name1' as any)(
      { name: 'Name2' },
      { name: '    name1' }
    )

    expect(result).toEqual(0)
  })
})
