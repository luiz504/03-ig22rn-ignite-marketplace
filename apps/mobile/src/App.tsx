import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { config, GluestackUIProvider } from '@gluestack-ui/themed'
import { Home } from './screens/Home'

export function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={styles.container} testID="container">
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
