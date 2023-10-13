import { StatusBar } from 'expo-status-bar'
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import { CategoriesComponent, BigCardComponent, NearestByRowComponent } from '../Components'
import * as Icon from "react-native-feather"


const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-black flex-1">
        <StatusBar style="light" />

        {/* Logo and Location */}
        <View className="flex-row justify-between items-center mt-4 px-4 pb-2 pt-3 space-x-2">
            <Image source={require("../assets/favicon.png")} />
            <View className="flex-row items-center">
                <Icon.MapPin height="25" width="25" stroke="gray" strokeWidth={3} />
                <Text className="text-gray-400 ml-1">Niš, Srbija</Text>
            </View>
        </View>

        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                paddingBottom: 60
            }}
        >   
            {/* Categories */}
            <CategoriesComponent />

            {/* Big card */}
            <BigCardComponent />
            
            {/* Geographicaly nearest row */}
            <NearestByRowComponent />
            <NearestByRowComponent />

        </ScrollView>
        
    </SafeAreaView>
  )
}

export default HomeScreen