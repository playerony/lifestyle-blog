import { MutableRefObject, useEffect, useRef } from 'react'

const useTimeout = (callback: Function, delay: number): void => {
  const savedCallback: MutableRefObject<Function | undefined> = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => {
      if (savedCallback?.current) {
        savedCallback.current()
      }
    }

    const id = setTimeout(tick, delay)
    return () => clearTimeout(id)
  }, [delay])
}

export default useTimeout
