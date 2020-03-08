import styled from 'styled-components'

import EToastType from '@type/common/EToastType'

import variable from '@style/variable'
import { respondTo, borderRadius } from '@style/mixin'

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
  padding: ${variable.paddingBig}px;
  margin-bottom: ${variable.paddingBig}px;
  background-color: ${({ type }: IStyledWrapperProps) => TOAST_COLOR[type]};

  ${borderRadius('4px')}

  ${respondTo.mediumScreen`
    padding: ${variable.paddingMedium}px;
    margin-bottom: ${variable.paddingMedium}px;
  `}

  ${respondTo.smallScreen`
    padding: ${variable.paddingSmall}px;
    margin-bottom: ${variable.paddingSmall}px;
  `}

  ${respondTo.mobileScreen`
    padding: ${variable.paddingSmall / 2}px;
    margin-bottom: ${variable.paddingSmall / 2}px;
  `}
`
