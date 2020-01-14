import { InputHTMLAttributes } from 'react'

export type TInputStatus = 'error' | 'success'

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  status?: TInputStatus
  errorMsg?: string | null
}
