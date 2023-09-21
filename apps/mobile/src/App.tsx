import { useCallback, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Home } from './screens/Home'
import { theme } from './theme'

SplashScreen.preventAutoHideAsync()

export function App() {
  const [fontsLoaded] = useFonts({
    'Karla-Regular': require('./assets/fonts/Karla-Regular.ttf'),
    'Karla-Bold': require('./assets/fonts/Karla-Bold.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  useLayoutEffect(() => {
    onLayoutRootView()
  }, [onLayoutRootView])

  if (!fontsLoaded) {
    return null
  }

  return (
    <GluestackUIProvider config={theme}>
      <View style={styles.container} testID="root">
        <StatusBar style="auto" />
        <Home />
      </View>
    </GluestackUIProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
