import EThemeMode from '@type/common/EThemeMode'

export interface IThemeContextProps {
  mode: EThemeMode
  toggle: (checked: boolean) => void
}
