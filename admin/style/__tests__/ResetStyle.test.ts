// @ts-nocheck
const createGlobalStyleMock = jest.fn()

jest.doMock('styled-components', () => {
  const originalModule = jest.requireActual('styled-components')

  return {
    ...originalModule,
    createGlobalStyle: createGlobalStyleMock
  }
})

describe('ResetStyle Component', () => {
  it('should call with proper styles', () => {
    require('../ResetStyle')

    expect(createGlobalStyleMock).toHaveBeenCalledWith(
      RESET_STYLE_MOCK,
      [
        '\n  appearance: ',
        'none',
        ';\n  -ms-appearance: ',
        'none',
        ';\n  -moz-appearance: ',
        'none',
        ';\n  -webkit-appearance: ',
        'none',
        ';\n'
      ],
      [
        '\n  appearance: ',
        'none',
        ';\n  -ms-appearance: ',
        'none',
        ';\n  -moz-appearance: ',
        'none',
        ';\n  -webkit-appearance: ',
        'none',
        ';\n'
      ],
      [
        '\n  appearance: ',
        'button',
        ';\n  -ms-appearance: ',
        'button',
        ';\n  -moz-appearance: ',
        'button',
        ';\n  -webkit-appearance: ',
        'button',
        ';\n'
      ],
      [
        '\n  appearance: ',
        'textfield',
        ';\n  -ms-appearance: ',
        'textfield',
        ';\n  -moz-appearance: ',
        'textfield',
        ';\n  -webkit-appearance: ',
        'textfield',
        ';\n'
      ],
      [
        '\n  appearance: ',
        'none',
        ';\n  -ms-appearance: ',
        'none',
        ';\n  -moz-appearance: ',
        'none',
        ';\n  -webkit-appearance: ',
        'none',
        ';\n'
      ]
    )
  })
})

const RESET_STYLE_MOCK = [
  "\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  :focus {\n    outline: 0;\n  }\n\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  body {\n    line-height: 1;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  input[type=search]::-webkit-search-cancel-button,\n  input[type=search]::-webkit-search-decoration,\n  input[type=search]::-webkit-search-results-button,\n  input[type=search]::-webkit-search-results-decoration {\n    ",
  '\n  }\n\n  input[type=search] {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n\n    ',
  '\n  }\n\n  textarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n  }\n\n  audio,\n  canvas,\n  video {\n    display: inline-block;\n    display: inline;\n    zoom: 1;\n    max-width: 100%;\n  }\n\n  audio:not([controls]) {\n    display: none;\n    height: 0;\n  }\n\n  [hidden] {\n    display: none;\n  }\n\n  html {\n    font-size: 100%;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a:focus {\n    outline: thin dotted;\n  }\n\n  a:active,\n  a:hover {\n    outline: 0;\n  }\n\n  img {\n    border: 0;\n    -ms-interpolation-mode: bicubic;\n  }\n\n  figure {\n    margin: 0;\n  }\n\n  form {\n    margin: 0;\n  }\n\n  fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  }\n\n  legend {\n    border: 0;\n    padding: 0;\n    white-space: normal;\n    margin-left: -7px;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    font-size: 100%;\n    margin: 0;\n    vertical-align: baseline;\n    vertical-align: middle;\n  }\n\n  button,\n  input {\n    line-height: normal;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  html input[type="button"],\n  input[type="reset"],\n  input[type="submit"] {\n    cursor: pointer;\n    overflow: visible;\n\n    ',
  '\n  }\n\n  button[disabled],\n  html input[disabled] {\n    cursor: default;\n  }\n\n  input[type="checkbox"],\n  input[type="radio"] {\n    box-sizing: border-box;\n    padding: 0;\n    height: 13px;\n    width: 13px;\n  }\n\n  input[type="search"] {\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n    box-sizing: content-box;\n\n    ',
  '\n  }\n\n  input[type="search"]::-webkit-search-cancel-button,\n  input[type="search"]::-webkit-search-decoration {\n    ',
  '\n  }\n\n  button::-moz-focus-inner,\n  input::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n\n  textarea {\n    overflow: auto;\n    vertical-align: top;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  html,\n  button,\n  input,\n  select,\n  textarea {\n    color: #222;\n  }\n\n  ::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n  }\n\n  ::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n  }\n\n  img {\n    vertical-align: middle;\n  }\n\n  fieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  .chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n  }\n'
]
