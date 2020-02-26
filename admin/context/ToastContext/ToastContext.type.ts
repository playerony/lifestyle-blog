import EToastType from '@type/common/EToastType'

export interface IToastContextProps {
  add: (message: string, type: EToastType) => void
}
