// @ts-ignore
const createGlobalStyleMock = jest.fn()

jest.doMock('styled-components', () => ({
  createGlobalStyle: createGlobalStyleMock
}))

describe('GlobalStyle Component', () => {
  it('should call with proper styles', () => {
    require('../GlobalStyle')

    expect(createGlobalStyleMock).toHaveBeenCalledWith(
      GLOBAL_STYLE_MOCK,
      jasmine.any(Function),
      jasmine.any(Function),
      '1.25rem',
      '0.87rem',
      '2rem',
      jasmine.any(Function),
      jasmine.any(Function),
      '1.5rem',
      jasmine.any(Function),
      jasmine.any(Function),
      '1.18rem',
      jasmine.any(Function),
      jasmine.any(Function),
      '1rem',
      jasmine.any(Function),
      jasmine.any(Function),
      '0.81rem',
      jasmine.any(Function),
      jasmine.any(Function),
      '0.68rem',
      jasmine.any(Function),
      jasmine.any(Function)
    )
  })
})

const GLOBAL_STYLE_MOCK = [
  '\n  body {\n    font-family: ',
  ';\n    background-color: ',
  ';\n  }\n\n  label {\n    font-size: ',
  ';\n  }\n\n  p {\n    font-size: ',
  ';\n  }\n\n  h1 {\n    font-weight: bold;\n    font-size: ',
  ';\n    color: ',
  ';\n    font-family: ',
  ';\n  }\n\n  h2 {\n    font-weight: bold;\n    font-size: ',
  ';\n    color: ',
  ';\n    font-family: ',
  ';\n  }\n\n  h3 {\n    font-weight: bold;\n    font-size: ',
  ';\n    color: ',
  ';\n    font-family: ',
  ';\n  }\n\n  h4 {\n    font-weight: bold;\n    font-size: ',
  ';\n    color: ',
  ';\n    font-family: ',
  ';\n  }\n\n  h5 {\n    font-weight: bold;\n    font-size: ',
  ';\n    color: ',
  ';\n    font-family: ',
  ';\n  }\n\n  h6 {\n    font-weight: bold;\n    font-size: ',
  ';\n    color: ',
  ';\n    font-family: ',
  ';\n  }\n'
]
