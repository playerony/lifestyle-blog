import TResponseError from '../TResponseError'

describe('TResponseError Interface', () => {
  it('should contain one parameters', () => {
    expect(Object.keys(objectMock)).toHaveLength(1)
  })

  it('has a test parameter', () => {
    expect(objectMock.test).toEqual(['Example string'])
  })
})

interface IMock {
  test: string
}

const objectMock: TResponseError<IMock> = {
  test: ['Example string']
}
