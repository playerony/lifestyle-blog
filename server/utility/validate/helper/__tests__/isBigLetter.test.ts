import isBigLetter from '../isBigLetter'

describe('isBigLetter Function', () => {
  it('import isBigLetter', () => {
    expect(typeof isBigLetter).toEqual('function')
  })

  it('should return true if passed string contain big letter', () => {
    expect(isBigLetter('123A')).toBeTruthy()
    expect(isBigLetter('aBcD')).toBeTruthy()
    expect(isBigLetter('aZaa')).toBeTruthy()
    expect(isBigLetter('@%nZ@3')).toBeTruthy()
  })

  it('should return false if passed string does not contain big letter', () => {
    expect(isBigLetter([])).toBeFalsy()
    expect(isBigLetter(NaN)).toBeFalsy()
    expect(isBigLetter(123)).toBeFalsy()
    expect(isBigLetter(null)).toBeFalsy()
    expect(isBigLetter('123')).toBeFalsy()
    expect(isBigLetter('%^!@')).toBeFalsy()
    expect(isBigLetter(undefined)).toBeFalsy()
  })
})
