import { ReactNode, ReactElement } from 'react'

export interface IContainerProps {
  children: ReactElement | Array<Exclude<ReactNode, boolean | null | undefined>>
}
