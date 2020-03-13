import { Context, createContext } from 'react'

import { ILoadingProps } from './Loading.type'

const initialData: ILoadingProps = {
  toggleLoader: (isLoading: boolean) => {}
}

export const LoadingContext: Context<ILoadingProps> = createContext(initialData)
