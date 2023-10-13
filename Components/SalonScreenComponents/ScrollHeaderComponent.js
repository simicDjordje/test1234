import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather"

const ScrollHeaderComponent = () => {

  const navigation = useNavigation()

  return (
    <View className="bg-transparent absolute top-0 z-10 w-full pt-8 px-4">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity className="rounded-full bg-black p-3" onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full bg-black p-3" onPress={() => navigation.navigate('Map')}>
          <Icon.Maximize strokeWidth={3} stroke="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ScrollHeaderComponent