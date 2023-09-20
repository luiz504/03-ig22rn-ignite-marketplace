import { FC } from 'react'
import { Text, View } from 'react-native'
import { Test } from '~/components/Test'

export const Home: FC = () => {
  return (
    <View>
      <Text> Home </Text>
      <Test />
    </View>
  )
}
