import { SyntheticEvent } from 'react'

export interface IEditorInputProps {
  label?: string
  initialValue?: string
  errorMessage?: string | null
  onBlur?: (event: SyntheticEvent) => void
  onFocus?: (event: SyntheticEvent) => void
  onChange: (content: string) => void
}
