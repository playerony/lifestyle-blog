import styled from 'styled-components'

import EToastType from '@type/common/EToastType'

import variable from '@style/variable'
import { borderRadius } from '@style/mixin'

interface IStyledWrapperProps {
  type: EToastType
}

const TOAST_COLOR = {
  [EToastType.INFO]: variable.color.blue500,
  [EToastType.ERROR]: variable.color.red500,
  [EToastType.SUCCESS]: variable.color.green400
}

export const StyledWrapper = styled.div<IStyledWrapperProps>`
  color: ${variable.color.white};
  padding: ${variable.paddingSmall}px;
  margin-bottom: ${variable.paddingSmall}px;
  background-color: ${({ type }: IStyledWrapperProps) => TOAST_COLOR[type]};

  ${borderRadius('4px')}
`
