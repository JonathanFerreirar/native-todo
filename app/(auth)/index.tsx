import { Text } from 'react-native'

import Tabs from '@/components/tabs/tabs'
import ThemedView from '@/primitive/ThemedView'

const HomeScreen = () => {
  return (
    <ThemedView className="flex-1 items-center justify-center">
      {/* <Text className="text-white">
        Ola jhow, como você está meu nobre guerreiro
      </Text> */}

      <Tabs />
    </ThemedView>
  )
}

export default HomeScreen
