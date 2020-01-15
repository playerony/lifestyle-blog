import getRem from '../getRem'

describe('getRem Function', () => {
  it('should return rem value with unit', () => {
    expect(getRem(16)).toEqual('1rem')
    expect(getRem(20)).toEqual('1.25rem')
    expect(getRem(14)).toEqual('0.87rem')
    expect(getRem(25)).toEqual('1.56rem')
    expect(getRem(89)).toEqual('5.56rem')
    expect(getRem(5)).toEqual('0.31rem')
  })

  it('should return rem value for a different base', () => {
    expect(getRem(16, 15)).toEqual('1.06rem')
    expect(getRem(20, 50)).toEqual('0.4rem')
    expect(getRem(14, 12)).toEqual('1.16rem')
    expect(getRem(25, 51)).toEqual('0.49rem')
    expect(getRem(89, 1313)).toEqual('0.06rem')
    expect(getRem(5, 2)).toEqual('2.5rem')
  })
})
