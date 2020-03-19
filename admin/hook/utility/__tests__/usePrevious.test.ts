import { renderHook } from '@testing-library/react-hooks'

import usePrevious from '../usePrevious'

const setUp = () =>
  renderHook(({ counter }) => usePrevious(counter), {
    initialProps: { counter: 0 }
  })

describe('usePrevious Hook', () => {
  it('import usePrevious', () => {
    expect(typeof usePrevious).toBe('function')
  })

  it('should return undefined on initial render', () => {
    const { result } = setUp()

    expect(result.current).toBeUndefined()
  })

  it('should always return previous state after each update', () => {
    const { result, rerender } = setUp()

    rerender({ counter: 1 })
    expect(result.current).toBe(0)

    rerender({ counter: 2 })
    expect(result.current).toBe(1)

    rerender({ counter: 3 })
    expect(result.current).toBe(2)
  })
})
