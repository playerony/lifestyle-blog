import { ButtonHTMLAttributes } from 'react'

export type TFloating = 'left' | 'right'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  marginTop?: boolean
  floating?: TFloating
}
