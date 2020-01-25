import { renderHook } from '@testing-library/react-hooks'

import useEventListener from '../useEventListener'

const mouseMoveEvent = { clientX: 100, clientY: 200 }

describe('useEventListener Hook', () => {
  it('import useEventListener', () => {
    expect(typeof useEventListener).toBe('function')
  })

  it('should work if passed all parameters', () => {
    const handler = jest.fn()
    const addEventListenerSpy = jest.spyOn(
      addEventListenerMock,
      'addEventListener'
    )

    renderHook(() => {
      useEventListener('blur', handler, addEventListenerMock as any)
    })

    expect(addEventListenerSpy).toBeCalled()

    addEventListenerMock.dispatchEvent(mouseMoveEvent)
    expect(handler).toBeCalledWith(mouseMoveEvent)

    addEventListenerSpy.mockRestore()
  })

  it('element parameter is optional', () => {
    const handler = jest.fn()
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener')

    renderHook(() => {
      useEventListener('blur', handler)
    })

    expect(addEventListenerSpy).toBeCalled()

    addEventListenerSpy.mockRestore()
  })

  it('fails safe with wrong element parameter', () => {
    const handler = jest.fn()

    renderHook(() => {
      useEventListener('blur', handler, {} as any)
    })
  })
})

let hackHandler: Function | null = null

const addEventListenerMock = {
  addEventListener: (eventName: WindowEventMap, handler: Function) => {
    hackHandler = handler
  },
  removeEventListener: () => {
    hackHandler = null
  },
  dispatchEvent: (event: Partial<MouseEvent>) => {
    if (hackHandler) {
      hackHandler(event)
    }
  }
}
