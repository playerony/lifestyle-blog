import { InputHTMLAttributes } from 'react'

export default interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string | null
}
