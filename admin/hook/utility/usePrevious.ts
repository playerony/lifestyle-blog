import { MutableRefObject, useEffect, useRef } from 'react'

const usePrevious = <T = any>(state: T): T | undefined => {
  const ref: MutableRefObject<T | undefined> = useRef()

  useEffect(() => {
    ref.current = state
  }, [state])

  return ref.current
}

export default usePrevious
