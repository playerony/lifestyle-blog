
import { useEffect } from 'react'

import { IScrollToTopProps } from './ScrollToTop.type'

const ScrollToTop = ({ location, children }: IScrollToTopProps): JSX.Element => {
  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [location])

  return children
}

export default ScrollToTop