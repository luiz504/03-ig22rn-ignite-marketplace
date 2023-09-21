import { render } from '@testing-library/react-native'
import { GluestackUIProvider, config } from '@gluestack-ui/themed'
import { FCC } from 'react'

const GPProvider: FCC<{ brutus: string }> = ({ children }) => {
  return (
    <GluestackUIProvider config={config.theme}>{children}</GluestackUIProvider>
  )
}

export const renderWithGP: typeof render = (ui, options) =>
  render(ui, { wrapper: GPProvider, ...options })
