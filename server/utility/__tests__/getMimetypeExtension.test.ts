import getMimetypeExtension from '../getMimetypeExtension'

describe('getMimetypeExtension Function', () => {
  it('should throw an error', () => {
    try {
      getMimetypeExtension('example value')
    } catch (e) {
      expect(e.message).toEqual('"Provided mimetype is wrong."')
    }
  })

  it('should return proper extension', () => {
    expect(getMimetypeExtension('image/jpeg')).toEqual('jpeg')
    expect(getMimetypeExtension('application/octet-stream')).toEqual('bin')
  })
})
