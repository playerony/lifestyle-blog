import { useContext } from 'react'

import { LoaderContext } from '@context/Loader'

const useLoader = () => useContext(LoaderContext)

export default useLoader
