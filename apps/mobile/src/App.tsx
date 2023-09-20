import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import { Home } from './screens/Home'

export function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Home />
    </View>
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