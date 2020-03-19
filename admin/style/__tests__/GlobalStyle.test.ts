// @ts-nocheck
const createGlobalStyleMock = jest.fn().mockImplementation((value, ...args) => {
  return value
})

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
        '\n  transition: ',
        'background-color 500ms linear',
        ';\n  -o-transition: ',
        'background-color 500ms linear',
        ';\n  -ms-transition: ',
        'background-color 500ms linear',
        ';\n  -moz-transition: ',
        'background-color 500ms linear',
        ';\n  -webkit-transition: ',
        'background-color 500ms linear',
        ';\n'
      ],
      '1.5rem',
      jasmine.any(Function),
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '1.37rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '1.25rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '1.18rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '1.12rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '1.12rem',
      jasmine.any(Function),
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '1rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '0.87rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '0.81rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '0.75rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '2.25rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n'
      ],
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '2.12rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '2rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '1.93rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '1.87rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '1.75rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n'
      ],
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '1.62rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '1.5rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '1.43rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '1.37rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '1.43rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n'
      ],
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '1.31rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '1.18rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '1.12rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '1.06rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '1.25rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n'
      ],
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '1.12rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '1rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '0.93rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '0.87rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '1.06rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n'
      ],
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '0.93rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '0.81rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '0.75rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '0.68rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      '0.93rem',
      "'HelveticaNeueBold', Helvetica, Arial, sans-serif",
      jasmine.any(Function),
      [
        '\n  transition: ',
        'color 500ms linear',
        ';\n  -o-transition: ',
        'color 500ms linear',
        ';\n  -ms-transition: ',
        'color 500ms linear',
        ';\n  -moz-transition: ',
        'color 500ms linear',
        ';\n  -webkit-transition: ',
        'color 500ms linear',
        ';\n'
      ],
      [
        '\n    @media (max-width: ',
        '1919',
        'px) {\n      ',
        '\n      font-size: ',
        '0.81rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1367',
        'px) {\n      ',
        '\n      font-size: ',
        '0.68rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '1023',
        'px) {\n      ',
        '\n      font-size: ',
        '0.62rem',
        ';\n    ',
        ';\n    }\n  '
      ],
      [
        '\n    @media (max-width: ',
        '750',
        'px) {\n      ',
        '\n      font-size: ',
        '0.56rem',
        ';\n    ',
        ';\n    }\n  '
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
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  p {\n    font-size: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  h1 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  h2 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  h3 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  h4 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  h5 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n\n  h6 {\n    font-weight: bold;\n    font-size: ',
  ';\n    font-family: ',
  ';\n    color: ',
  ';\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n\n    ',
  '\n  }\n'
]
