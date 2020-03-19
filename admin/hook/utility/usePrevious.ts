import { MutableRefObject, useEffect, useRef } from 'react'

const usePrevious = <T = any>(value: T) => {
  const ref: MutableRefObject<T | undefined> = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
