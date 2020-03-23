import { renderHook } from '@testing-library/react-hooks'

import useTitle from '../useTitle'

describe('useTitle Hook', () => {
  it('import useTitle', () => {
    expect(typeof useTitle).toBe('function')
  })

  it('should change the document`s title', async () => {
    renderHook(() => {
      useTitle('Title')
    })

    expect(document.title).toEqual(
      'The Blog of Author Paweł Wojtasiński - Admin | Title'
    )
  })
})
