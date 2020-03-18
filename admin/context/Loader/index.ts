import { Context, createContext } from 'react'

import { ILoaderContextProps } from './Loader.type'

const initialData: ILoaderContextProps = {
  toggleLoader: (isLoading: boolean) => {}
}

export const LoaderContext: Context<ILoaderContextProps> = createContext(
  initialData
)
