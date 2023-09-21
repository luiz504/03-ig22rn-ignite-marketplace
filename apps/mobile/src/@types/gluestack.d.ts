/* eslint-disable @typescript-eslint/no-empty-interface */
import { theme } from '~/theme'

type ConfigType = typeof theme

declare module '@gluestack-ui/themed' {
  interface UIConfig extends ConfigType {}
}
