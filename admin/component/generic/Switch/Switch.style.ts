import styled, { css } from 'styled-components'

import { ThemeProps } from '@style/theme'
import { borderRadius, transition, boxShadow, transform } from '@style/mixin'

interface IStyledWrapperProps {
  isChecked: boolean
}

export const StyledCircle = styled.div`
  width: 28px;
  height: 28px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};

  ${borderRadius('50px')}
  ${transition('all 300ms')}
  ${boxShadow(`
    0 3px 1px 0 rgba(0, 0, 0, 0.1),
    0 1px 1px 0 rgba(0, 0, 0, 0.16),
    0 3px 8px 0 rgba(0, 0, 0, 0.15)`)}
`

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  font-size: 20px;
  height: 32px;
  width: 52px;
  background-color: ${({ theme }: ThemeProps) => theme.color.white};
  border: 2px solid ${({ theme }: ThemeProps) => theme.color.gray300};

  ${borderRadius('50px')}

  ${({ isChecked }: IStyledWrapperProps) =>
    isChecked &&
    css`
      background-color: red;

      & > ${StyledCircle} {
        ${transform('translate3d(calc(100% - 8px), 0, 0)')}
      }
    `}
`
