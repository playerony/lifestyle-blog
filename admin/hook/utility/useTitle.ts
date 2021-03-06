import { useEffect } from 'react'

import { BASE_DOCUMENT_TITLE } from '@config/constant'

const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    document.title = `${BASE_DOCUMENT_TITLE} ${title}`
  }, [title])
}

export default useDocumentTitle
