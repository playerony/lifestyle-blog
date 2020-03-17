import { Context, createContext } from 'react'

import { ILoaderProps } from './Loader.type'

const initialData: ILoaderProps = {
  toggleLoader: (isLoading: boolean) => {}
}

export const LoaderContext: Context<ILoaderProps> = createContext(initialData)
