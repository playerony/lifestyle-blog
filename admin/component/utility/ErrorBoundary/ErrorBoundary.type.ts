import { ReactElement } from 'react'

export interface IErrorBoundaryProps {
  children: ReactElement | ReactElement[]
}

export interface IErrorBoundaryState {
  error: Error | null
}
