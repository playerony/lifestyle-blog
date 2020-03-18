import { renderHook, act } from '@testing-library/react-hooks'

import useTimeout from '../useTimeout'

const timeoutFunctionMock = jest.fn()

jest.useFakeTimers()

describe('useTimeout Hook', () => {
  it('import useTimeout', () => {
    expect(typeof useTimeout).toBe('function')
  })

  it('should not call a function before delay time', async () => {
    renderHook(() => {
      useTimeout(timeoutFunctionMock, 1000)
    })

    expect(timeoutFunctionMock).not.toHaveBeenCalled()
  })

  it('should call a function after delay time', async () => {
    renderHook(() => {
      useTimeout(timeoutFunctionMock, 1)
    })

    act(() => {
      jest.advanceTimersByTime(5)
    })

    expect(timeoutFunctionMock).toHaveBeenCalled()
  })
})
