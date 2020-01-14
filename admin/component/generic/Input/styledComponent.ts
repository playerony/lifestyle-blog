import styled from 'styled-components'

import IInput from './IInput'

import { transition } from '@style/mixin'
import { ThemeProps } from '@style/theme'

export const StyledInputWrapper = styled.div`
  position: relative;
`

export const StyledInput = styled.input`
  height: 46px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid ${({ theme }: ThemeProps<IInput>) => theme.color.gray700};
  background-color: ${({ theme }: ThemeProps<IInput>) => theme.color.white};
  ${transition('all 0.5s linear')}

  &:focus {
    border-color: ${({ theme }: ThemeProps<IInput>) => theme.color.blue700};
  }
`
