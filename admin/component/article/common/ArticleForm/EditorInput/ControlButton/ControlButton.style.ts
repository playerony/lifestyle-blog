import styled, { css } from 'styled-components'

import { ThemeProps } from '@style/theme'
import { transition } from '@style/mixin'

interface IStyledButton {
  active: boolean
}

export const StyledButton = styled.label<IStyledButton>`
  cursor: pointer;
  margin-bottom: 5px;
  color: ${({ theme }: ThemeProps) => theme.color.black};
  margin-right: ${({ theme }: ThemeProps) => theme.paddingSmall}px;

  ${transition('color 0.5s linear')}

  ${({ active, theme }: ThemeProps<IStyledButton>) =>
    active &&
    css`
      color: ${theme.color.gray700};
    `}
`
