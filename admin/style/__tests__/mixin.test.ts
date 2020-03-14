import {
  flexbox,
  flexWrap,
  animation,
  boxShadow,
  transform,
  respondTo,
  appearance,
  transition,
  alignItems,
  borderRadius,
  transformStyle,
  justifyContent,
  flexDirection,
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

  describe('flexbox Function', () => {
    it('should return proper data', () => {
      const result = flexbox()

      expect(result).toEqual([
        '\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n'
      ])
    })
  })

  describe('alignItems Function', () => {
    it('should return proper data', () => {
      const result = alignItems('center')

      expect(result).toEqual([
        '\n  -webkit-align-items: ',
        'center',
        ';\n  -moz-align-items: ',
        'center',
        ';\n  -ms-align-items: ',
        'center',
        ';\n  -ms-flex-align: ',
        'center',
        ';\n  align-items: ',
        'center',
        ';\n'
      ])
    })
  })

  describe('justifyContent Function', () => {
    it('should return proper data', () => {
      const result = justifyContent('center')

      expect(result).toEqual([
        '\n  -webkit-justify-content: ',
        'center',
        ';\n  -moz-justify-content: ',
        'center',
        ';\n  -ms-justify-content: ',
        'center',
        ';\n  justify-content: ',
        'center',
        ';\n  -ms-flex-pack: ',
        'center',
        ';\n'
      ])
    })
  })

  describe('flexDirection Function', () => {
    it('should return proper data', () => {
      const result = flexDirection('row')

      expect(result).toEqual([
        '\n  -webkit-flex-direction: ',
        'row',
        ';\n  -moz-flex-direction: ',
        'row',
        ';\n  -ms-flex-direction: ',
        'row',
        ';\n  flex-direction: ',
        'row',
        ';\n'
      ])
    })
  })

  describe('boxShadow Function', () => {
    it('should return proper data', () => {
      const result = boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')

      expect(result).toEqual([
        '\n  -webkit-box-shadow: ',
        '0 2px 8px 2px rgba(0, 0, 0, 0.16)',
        ';\n  -moz-box-shadow: ',
        '0 2px 8px 2px rgba(0, 0, 0, 0.16)',
        ';\n  box-shadow: ',
        '0 2px 8px 2px rgba(0, 0, 0, 0.16)',
        ';\n'
      ])
    })
  })

  describe('flexWrap Function', () => {
    it('should return proper data', () => {
      const result = flexWrap('wrap')

      expect(result).toEqual([
        '\n  -webkit-flex-wrap: ',
        'wrap',
        ';\n  -moz-flex-wrap: ',
        'wrap',
        ';\n  -ms-flex-wrap: ',
        'wrap',
        ';\n  flex-wrap: ',
        'wrap',
        ';\n'
      ])
    })
  })

  describe('appearance Function', () => {
    it('should return proper data', () => {
      const result = appearance('none')

      expect(result).toEqual([
        '\n  -webkit-appearance: ',
        'none',
        ';\n  -moz-appearance: ',
        'none',
        ';\n  -ms-appearance: ',
        'none',
        ';\n  appearance: ',
        'none',
        ';\n'
      ])
    })
  })

  describe('respondTo Function', () => {
    it('should contain four functions', () => {
      expect(Object.keys(respondTo)).toHaveLength(4)
    })

    it('should return proper data for mobileScreen property', () => {
      const result = respondTo.mobileScreen`background-color: red`

      expect(result).toEqual([
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        'background-color: red',
        ';\n    }\n  '
      ])
    })

    it('should return proper data for smallScreen property', () => {
      const result = respondTo.smallScreen`background-color: red`

      expect(result).toEqual([
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        'background-color: red',
        ';\n    }\n  '
      ])
    })

    it('should return proper data for mediumScreen property', () => {
      const result = respondTo.mediumScreen`background-color: red`

      expect(result).toEqual([
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        'background-color: red',
        ';\n    }\n  '
      ])
    })

    it('should return proper data for largeScreen property', () => {
      const result = respondTo.largeScreen`background-color: red`

      expect(result).toEqual([
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        'background-color: red',
        ';\n    }\n  '
      ])
    })
  })
})
