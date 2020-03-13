import TResponseError from '../TResponseError'

describe('TResponseError Interface', () => {
  it('should contain one parameter', () => {
    expect(Object.keys(objectMock)).toHaveLength(1)
  })

  it('has a test parameter', () => {
    expect(objectMock.test).toEqual(['test'])
  })
})

interface IMock {
  test: string
}

const objectMock: TResponseError<IMock> = {
  test: ['test']
}
