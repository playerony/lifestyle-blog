import { useContext } from 'react'

import { ToastContext } from '@context/Toast'

const useToast = () => useContext(ToastContext)

export default useToast
