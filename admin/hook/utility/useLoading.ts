import { useContext } from 'react'

import { LoadingContext } from '@context/Loading'

const useLoading = () => useContext(LoadingContext)

export default useLoading
