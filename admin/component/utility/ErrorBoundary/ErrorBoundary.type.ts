import { ReactElement } from 'react'

export interface IErrorBoundaryProps {
  onError?: (error: Error) => void
  children: ReactElement | ReactElement[]
}

export interface IErrorBoundaryState {
  error: Error | null
}
