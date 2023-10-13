import { View, Text } from 'react-native'
import * as Icon from "react-native-feather"

const SalonInfoDataComponent = () => {
  return (
    <View>
      <View className="flex-row justify-between items-center">
        <Text className="text-white text-3xl font-bold">Berbernica Sicilija</Text>
        <View className="flex-row justify-between items-center">
          <Icon.Star strokeWidth={1} stroke="#f5d142" fill="#f5d142"/>
          <Text className="text-gray-100 font-bold text-lg">(4.7)</Text>
        </View>
      </View>
      <Text className="text-gray-500 text-sm font-bold mt-2">Neki opis opis neki lorem ipsum dolor amnet neki sta znam</Text>
      <View className="flex-row justify-start items-center mt-2">
        <Icon.Clock strokeWidth={2} stroke="gray" />
        <Text className="text-gray-100 text-md ml-2">Otvoreno do 19:30h</Text>
      </View>
      <View className="flex-row justify-start items-center mt-2">
        <Icon.MapPin strokeWidth={2} stroke="gray" />
        <Text className="text-gray-100 text-md ml-2">Vozda Karadjordja 13, Nis</Text>
      </View>
    </View>
  )
}

export default SalonInfoDataComponent