import EToastType from '@type/common/EToastType'

export interface IToastProps {
  content: string
  type: EToastType
  onClick: () => void
}
