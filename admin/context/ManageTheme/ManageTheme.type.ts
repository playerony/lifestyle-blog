import EThemeMode from '@type/common/EThemeMode'

export interface IManageThemeProps {
  mode: EThemeMode,
  toggle: (checked: boolean) => void
}
