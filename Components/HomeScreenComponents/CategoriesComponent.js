import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'

const CategoriesComponent = () => {
  return (
    <ScrollView
        className="mt-4"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
    >
      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-700 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/barber.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-50">Barber</Text>
      </View>

      {/* <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/hairstylist.png")} />
        </TouchableOpacity>
      </View> */}

      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-100 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/manicure.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-400">Nails</Text>
      </View>

      {/* <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/mascara-wand.png")} />
        </TouchableOpacity>
      </View> */}

      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/massage.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-400">Massage</Text>
      </View>

      {/* <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/makeup-artist.png")} />
        </TouchableOpacity>
      </View> */}

      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/grooming.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-400">Pet Groom</Text>
      </View>

      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/barber.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-400">Barber</Text>
      </View>

      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/grooming.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-400">Pet Groom</Text>
      </View>

      <View className="flex justify-center items-center">
        <TouchableOpacity className="p-2 bg-gray-200 rounded-full shadow mr-6">
            <Image style={{width: 45, height: 45}} source={require("../../assets/images/categories_icons/barber.png")} />
        </TouchableOpacity>
        <Text className="mr-6 text-gray-400">Barber</Text>
      </View>
      
    </ScrollView>
  )
}

export default CategoriesComponent