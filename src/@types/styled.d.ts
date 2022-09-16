import { defaultThemes } from "../styles/themes/default"

type ThemeType = typeof defaultThemes

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}