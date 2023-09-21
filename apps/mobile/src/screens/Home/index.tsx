import { Button, Text, VStack } from '@gluestack-ui/themed'
import { FC } from 'react'

import { Test } from '~/components/Test'

export const Home: FC = () => {
  return (
    <VStack testID="view-container">
      <Text color="$amber900" bold testID="some-content">
        Home
      </Text>
      <Test />
      <Button>
        <Text>Hello</Text>
      </Button>
    </VStack>
  )
}
