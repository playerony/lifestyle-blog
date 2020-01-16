import {
  animation,
  transform,
  transition,
  borderRadius,
  transformStyle,
  linearGradient,
  transformOrigin
} from '../mixin'

describe('mixin Functions', () => {
  describe('linearGradient Function', () => {
    it('should return background gradient with 3 versions without arguments', () => {
      const result = linearGradient('180deg')

      expect(result).toEqual([
        '\n    background: nth(nth(',
        ', 1), 1);\n    background: -webkit-linear-gradient(\n      legacy-direction(',
        '180deg',
        '),\n      ',
        '\n    );\n    background: linear-gradient(',
        '180deg',
        ', ',
        ');\n  '
      ])
    })

    it('should return background gradient with 3 versions with arguments', () => {
      const result = linearGradient('180deg', 'rgba(0, 0, 0, 0) 44%')

      expect(result).toEqual([
        '\n    background: nth(nth(',
        'rgba(0, 0, 0, 0) 44%',
        ', 1), 1);\n    background: -webkit-linear-gradient(\n      legacy-direction(',
        '180deg',
        '),\n      ',
        'rgba(0, 0, 0, 0) 44%',
        '\n    );\n    background: linear-gradient(',
        '180deg',
        ', ',
        'rgba(0, 0, 0, 0) 44%',
        ');\n  '
      ])
    })
  })

  describe('transition Function', () => {
    it('should return proper data', () => {
      const result = transition('all 0.5s linear')

      expect(result).toEqual([
        '\n  -webkit-transition: ',
        'all 0.5s linear',
        ';\n  -moz-transition: ',
        'all 0.5s linear',
        ';\n  -ms-transition: ',
        'all 0.5s linear',
        ';\n  -o-transition: ',
        'all 0.5s linear',
        ';\n  transition: ',
        'all 0.5s linear',
        ';\n'
      ])
    })
  })

  describe('animation Function', () => {
    it('should return proper data', () => {
      const result = animation('box1 800ms linear infinite')

      expect(result).toEqual([
        '\n  -webkit-animation: ',
        'box1 800ms linear infinite',
        ';\n  -moz-animation: ',
        'box1 800ms linear infinite',
        ';\n  -ms-animation: ',
        'box1 800ms linear infinite',
        ';\n  -o-animation: ',
        'box1 800ms linear infinite',
        ';\n  animation: ',
        'box1 800ms linear infinite',
        ';\n'
      ])
    })
  })

  describe('transform Function', () => {
    it('should return proper data', () => {
      const result = transform('translate(0, 100%)')

      expect(result).toEqual([
        '\n  -webkit-transform: ',
        'translate(0, 100%)',
        ';\n  -moz-transform: ',
        'translate(0, 100%)',
        ';\n  -ms-transform: ',
        'translate(0, 100%)',
        ';\n  -o-transform: ',
        'translate(0, 100%)',
        ';\n  transform: ',
        'translate(0, 100%)',
        ';\n'
      ])
    })
  })

  describe('transformOrigin Function', () => {
    it('should return proper data', () => {
      const result = transformOrigin('50% 50%')

      expect(result).toEqual([
        '\n  -webkit-transform-origin: ',
        '50% 50%',
        ';\n  -moz-transform-origin: ',
        '50% 50%',
        ';\n  -ms-transform-origin: ',
        '50% 50%',
        ';\n  -o-transform-origin: ',
        '50% 50%',
        ';\n  transform-origin: ',
        '50% 50%',
        ';\n'
      ])
    })
  })

  describe('borderRadius Function', () => {
    it('should return proper data', () => {
      const result = borderRadius('50px')

      expect(result).toEqual([
        '\n  border-radius: ',
        '50px',
        ';\n  -moz-border-radius: ',
        '50px',
        ';\n  -webkit-border-radius: ',
        '50px',
        ';\n'
      ])
    })
  })

  describe('transformStyle Function', () => {
    it('should return proper data', () => {
      const result = transformStyle('50px')

      expect(result).toEqual([
        '\n  -webkit-transform-style: ',
        '50px',
        ';\n  -moz-transform-style: ',
        '50px',
        ';\n  -ms-transform-style: ',
        '50px',
        ';\n  -o-transform-style: ',
        '50px',
        ';\n  transform-style: ',
        '50px',
        ';\n'
      ])
    })
  })
})
