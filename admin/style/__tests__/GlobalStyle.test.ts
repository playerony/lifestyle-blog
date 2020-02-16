// @ts-nocheck
const createGlobalStyleMock = jest.fn()

jest.doMock('styled-components', () => {
  const originalModule = jest.requireActual('styled-components')

  return {
    ...originalModule,
    createGlobalStyle: createGlobalStyleMock
  }
})

describe('GlobalStyle Component', () => {
  it('should call with proper styles', () => {
    require('../GlobalStyle')

    expect(createGlobalStyleMock).toHaveBeenCalledWith(
      GLOBAL_STYLE_MOCK,
      "'HelveticaNeue', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'background-color 500ms linear',
        ';\n  -moz-transition: ',
        'background-color 500ms linear',
        ';\n  -ms-transition: ',
        'background-color 500ms linear',
        ';\n  -o-transition: ',
        'background-color 500ms linear',
        ';\n  transition: ',
        'background-color 500ms linear',
        ';\n'
      ],
      '1.25rem',
      jasmine.any(Function),
      '0.87rem',
      jasmine.any(Function),
      '2rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  transition: ',
        'color 500ms linear',
        ';\n'
      ],
      '1.5rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  transition: ',
        'color 500ms linear',
        ';\n'
      ],
      '1.18rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  transition: ',
        'color 500ms linear',
        ';\n'
      ],
      '1rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  transition: ',
        'color 500ms linear',
        ';\n'
      ],
      '0.81rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  transition: ',
        'color 500ms linear',
        ';\n'
      ],
      '0.68rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  transition: ',
        'color 500ms linear',
        ';\n'
      ]
    )
  })
})

const GLOBAL_STYLE_MOCK = [
  '\n  body {\n    font-family: ',
  ';\n    background-color: ',
  ';\n\n    ',
  '\n  }\n\n  label {\n    font-size: ',
  ';\n    color: ',
  ';\n  }\n\n  p {\n    font-size: ',
  ';\n    color: ',
  ';\n  }\n\n  h1 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n  }\n\n  h2 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n  }\n\n  h3 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n  }\n\n  h4 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n  }\n\n  h5 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n  }\n\n  h6 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n  }\n'
]
