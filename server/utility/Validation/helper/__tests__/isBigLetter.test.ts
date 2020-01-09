import isBigLetter from '../isBigLetter'

describe('isBigLetter Function', () => {
  it('should return true if passed string contain big letter', () => {
    expect(isBigLetter('123A')).toBeTruthy()
    expect(isBigLetter('aBcD')).toBeTruthy()
    expect(isBigLetter('aZaa')).toBeTruthy()
    expect(isBigLetter('@%nZ@3')).toBeTruthy()
  })

  it('should return false', () => {
    expect(isBigLetter(undefined)).toBeFalsy()
    expect(isBigLetter(null)).toBeFalsy()
    expect(isBigLetter(NaN)).toBeFalsy()
    expect(isBigLetter(123)).toBeFalsy()
    expect(isBigLetter([])).toBeFalsy()
    expect(isBigLetter('123')).toBeFalsy()
    expect(isBigLetter('%^!@')).toBeFalsy()
  })
})
