import { SyntheticEvent } from 'react'

export interface IEditorInputProps {
  label?: string
  initialValue?: string
  errorMessage?: string | null
  onChange: (content: string) => void
  onBlur?: (event: SyntheticEvent) => void
  onFocus?: (event: SyntheticEvent) => void
}
