
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (): null => {
  const { pathname, search } = useLocation()

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [pathname, search])

  return null
}

export default ScrollToTop