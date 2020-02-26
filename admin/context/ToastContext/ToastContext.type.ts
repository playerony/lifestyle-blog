import EToastType from '@type/common/EToastType'

export interface IToastContextProps {
  remove: (toastId: number) => void
  add: (message: string, type: EToastType) => void
}
