import { linearGradient, transition } from '../mixin'

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
})
