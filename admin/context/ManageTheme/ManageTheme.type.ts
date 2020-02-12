import EThemeMode from '@type/common/EThemeMode'

export interface IManageTheme {
  mode: EThemeMode,
  toggle: (checked: boolean) => void
}
