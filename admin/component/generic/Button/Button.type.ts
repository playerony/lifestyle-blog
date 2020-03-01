import { ButtonHTMLAttributes } from 'react'

type TFloating = 'left' | 'right'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  circle?: boolean
  marginTop?: boolean
  floating?: TFloating
}
