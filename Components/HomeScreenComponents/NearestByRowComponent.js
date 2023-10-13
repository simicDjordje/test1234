import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import RowCardComponent from './RowCardComponent'

const NearestByRowComponent = () => {
  return (
    <View className="mt-5">
    {/* Description and option */}
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="text-gray-100 font-bold text-lg">Najbliži vama</Text>
            <Text className="text-gray-500 text-xs">Neki od salona u vašoj blizini</Text>
        </View>
        <TouchableOpacity>
        <Text className="semi-bold text-gray-300">Pogledaj još</Text>
      </TouchableOpacity>
      </View>
    {/* Cards */}
    <ScrollView
        className="mt-5"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingLeft: 15
        }}
    >
        <RowCardComponent k={3} />
        <RowCardComponent k={1} />
        <RowCardComponent k={2} />
        <RowCardComponent k={1} />
        <RowCardComponent k={2} />
        <RowCardComponent k={3} />
    </ScrollView>
    </View>
  )
}

export default NearestByRowComponent