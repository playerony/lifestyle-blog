import { Props } from 'react-select'

export interface ISelectProps extends Props {
  label?: string
  errorMessage?: string | null
}

export interface IOption {
  label: string
  value: string
}
