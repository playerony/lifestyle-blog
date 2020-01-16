import getLightenDarkenColor from '../getLightenDarkenColor'

describe('getLightenDarkenColor Function', () => {
  it('should return darker color', () => {
    expect(getLightenDarkenColor('#444444', -2)).toEqual('#424242')
    expect(getLightenDarkenColor('#a345ba', -1)).toEqual('#a244b9')

    expect(getLightenDarkenColor('444444', -2)).toEqual('424242')
    expect(getLightenDarkenColor('a345ba', -1)).toEqual('a244b9')
  })

  it('should return lighten color', () => {
    expect(getLightenDarkenColor('#444444', 2)).toEqual('#464646')
    expect(getLightenDarkenColor('#a345ba', 5)).toEqual('#a84abf')

    expect(getLightenDarkenColor('444444', 2)).toEqual('464646')
    expect(getLightenDarkenColor('a345ba', 5)).toEqual('a84abf')
  })
})
