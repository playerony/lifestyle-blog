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
    it('import linearGradient', () => {
      expect(typeof linearGradient).toEqual('function')
    })

    it('should return background gradient with 3 versions without arguments', () => {
      const result = linearGradient('180deg')

      expect(result).toEqual([
        '\n    background: nth(nth(',
        ', 1), 1);\n    background: linear-gradient(',
        '180deg',
        ', ',
        ');\n    background: -webkit-linear-gradient(\n      legacy-direction(',
        '180deg',
        '),\n      ',
        '\n    );\n  '
      ])
    })

    it('should return background gradient with 3 versions with arguments', () => {
      const result = linearGradient('180deg', 'rgba(0, 0, 0, 0) 44%')

      expect(result).toEqual([
        '\n    background: nth(nth(',
        'rgba(0, 0, 0, 0) 44%',
        ', 1), 1);\n    background: linear-gradient(',
        '180deg',
        ', ',
        'rgba(0, 0, 0, 0) 44%',
        ');\n    background: -webkit-linear-gradient(\n      legacy-direction(',
        '180deg',
        '),\n      ',
        'rgba(0, 0, 0, 0) 44%',
        '\n    );\n  '
      ])
    })
  })

  describe('transition Function', () => {
    it('import transition', () => {
      expect(typeof transition).toEqual('function')
    })

    it('should return proper data', () => {
      const result = transition('all 500ms linear')

      expect(result).toEqual([
        '\n  transition: ',
        'all 500ms linear',
        ';\n  -o-transition: ',
        'all 500ms linear',
        ';\n  -ms-transition: ',
        'all 500ms linear',
        ';\n  -moz-transition: ',
        'all 500ms linear',
        ';\n  -webkit-transition: ',
        'all 500ms linear',
        ';\n'
      ])
    })
  })

  describe('animation Function', () => {
    it('import animation', () => {
      expect(typeof animation).toEqual('function')
    })

    it('should return proper data', () => {
      const result = animation('box1 500ms linear infinite')

      expect(result).toEqual([
        '\n  animation: ',
        'box1 500ms linear infinite',
        ';\n  -o-animation: ',
        'box1 500ms linear infinite',
        ';\n  -ms-animation: ',
        'box1 500ms linear infinite',
        ';\n  -moz-animation: ',
        'box1 500ms linear infinite',
        ';\n  -webkit-animation: ',
        'box1 500ms linear infinite',
        ';\n'
      ])
    })
  })

  describe('transform Function', () => {
    it('import transform', () => {
      expect(typeof transform).toEqual('function')
    })

    it('should return proper data', () => {
      const result = transform('translate(0, 100%)')

      expect(result).toEqual([
        '\n  transform: ',
        'translate(0, 100%)',
        ';\n  -o-transform: ',
        'translate(0, 100%)',
        ';\n  -ms-transform: ',
        'translate(0, 100%)',
        ';\n  -moz-transform: ',
        'translate(0, 100%)',
        ';\n  -webkit-transform: ',
        'translate(0, 100%)',
        ';\n'
      ])
    })
  })

  describe('transformOrigin Function', () => {
    it('import transformOrigin', () => {
      expect(typeof transformOrigin).toEqual('function')
    })

    it('should return proper data', () => {
      const result = transformOrigin('50% 50%')

      expect(result).toEqual([
        '\n  transform-origin: ',
        '50% 50%',
        ';\n  -o-transform-origin: ',
        '50% 50%',
        ';\n  -ms-transform-origin: ',
        '50% 50%',
        ';\n  -moz-transform-origin: ',
        '50% 50%',
        ';\n  -webkit-transform-origin: ',
        '50% 50%',
        ';\n'
      ])
    })
  })

  describe('borderRadius Function', () => {
    it('import borderRadius', () => {
      expect(typeof borderRadius).toEqual('function')
    })

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
    it('import transformStyle', () => {
      expect(typeof transformStyle).toEqual('function')
    })

    it('should return proper data', () => {
      const result = transformStyle('50px')

      expect(result).toEqual([
        '\n  transform-style: ',
        '50px',
        ';\n  -o-transform-style: ',
        '50px',
        ';\n  -ms-transform-style: ',
        '50px',
        ';\n  -moz-transform-style: ',
        '50px',
        ';\n  -webkit-transform-style: ',
        '50px',
        ';\n'
      ])
    })
  })

  describe('flexbox Function', () => {
    it('import flexbox', () => {
      expect(typeof flexbox).toEqual('function')
    })

    it('should return proper data', () => {
      const result = flexbox()

      expect(result).toEqual([
        '\n  display: flex;\n  display: -moz-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n'
      ])
    })
  })

  describe('alignItems Function', () => {
    it('import alignItems', () => {
      expect(typeof alignItems).toEqual('function')
    })

    it('should return proper data', () => {
      const result = alignItems('center')

      expect(result).toEqual([
        '\n  align-items: ',
        'center',
        ';\n  -ms-flex-align: ',
        'center',
        ';\n  -ms-align-items: ',
        'center',
        ';\n  -moz-align-items: ',
        'center',
        ';\n  -webkit-align-items: ',
        'center',
        ';\n'
      ])
    })
  })

  describe('justifyContent Function', () => {
    it('import justifyContent', () => {
      expect(typeof justifyContent).toEqual('function')
    })

    it('should return proper data', () => {
      const result = justifyContent('center')

      expect(result).toEqual([
        '\n  -ms-flex-pack: ',
        'center',
        ';\n  justify-content: ',
        'center',
        ';\n  -ms-justify-content: ',
        'center',
        ';\n  -moz-justify-content: ',
        'center',
        ';\n  -webkit-justify-content: ',
        'center',
        ';\n'
      ])
    })
  })

  describe('flexDirection Function', () => {
    it('import flexDirection', () => {
      expect(typeof flexDirection).toEqual('function')
    })

    it('should return proper data', () => {
      const result = flexDirection('row')

      expect(result).toEqual([
        '\n  flex-direction: ',
        'row',
        ';\n  -ms-flex-direction: ',
        'row',
        ';\n  -moz-flex-direction: ',
        'row',
        ';\n  -webkit-flex-direction: ',
        'row',
        ';\n'
      ])
    })
  })

  describe('boxShadow Function', () => {
    it('import boxShadow', () => {
      expect(typeof boxShadow).toEqual('function')
    })

    it('should return proper data', () => {
      const result = boxShadow('0 2px 8px 2px rgba(0, 0, 0, 0.16)')

      expect(result).toEqual([
        '\n  box-shadow: ',
        '0 2px 8px 2px rgba(0, 0, 0, 0.16)',
        ';\n  -moz-box-shadow: ',
        '0 2px 8px 2px rgba(0, 0, 0, 0.16)',
        ';\n  -webkit-box-shadow: ',
        '0 2px 8px 2px rgba(0, 0, 0, 0.16)',
        ';\n'
      ])
    })
  })

  describe('flexWrap Function', () => {
    it('import flexWrap', () => {
      expect(typeof flexWrap).toEqual('function')
    })

    it('should return proper data', () => {
      const result = flexWrap('wrap')

      expect(result).toEqual([
        '\n  flex-wrap: ',
        'wrap',
        ';\n  -ms-flex-wrap: ',
        'wrap',
        ';\n  -moz-flex-wrap: ',
        'wrap',
        ';\n  -webkit-flex-wrap: ',
        'wrap',
        ';\n'
      ])
    })
  })

  describe('appearance Function', () => {
    it('import appearance', () => {
      expect(typeof appearance).toEqual('function')
    })

    it('should return proper data', () => {
      const result = appearance('none')

      expect(result).toEqual([
        '\n  appearance: ',
        'none',
        ';\n  -ms-appearance: ',
        'none',
        ';\n  -moz-appearance: ',
        'none',
        ';\n  -webkit-appearance: ',
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
