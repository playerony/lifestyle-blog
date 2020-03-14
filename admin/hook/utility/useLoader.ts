import { useContext } from 'react'

import { LoaderContext } from '@context/Loader'

const useLoading = () => useContext(LoaderContext)

export default useLoading
