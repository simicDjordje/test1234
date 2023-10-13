import { View, Text, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { MapStyleDark, MapStyleLight } from '../Constants/MapStyles'
import * as Icon from "react-native-feather"
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

const CustomMarkerComponent = () => {
    return (
        <View className="w-24 h-24">
            <View className="absolute bottom-4 right-4 w-16 h-16 bg-sky-300 rounded-bl-full rounded-tl-full rounded-tr-full rotate-45">
                <View class="relative w-14 h-14">
                    <Image className="absolute top-1 left-1 w-14 h-14 rounded-full -rotate-45" source={require("../assets/images/test/logo2.jpg")} alt="Logo" />
                </View>
            </View>
            {/* <Image className="w-12 h-12 rounded-full border-2 border-gray-50" source={require("../../assets/images/test/logo2.jpg")} alt="Logo" /> */}
        </View>
    )
}

const ExpandedMapScreen = () => {
    
    const navigation = useNavigation()

  return (
    <SafeAreaView className="relative w-full h-full">
      <StatusBar style="light" />
      <MapView
        className="w-full h-full"
        customMapStyle={MapStyleDark}
        initialRegion={{
            latitude: 43.32075859905513,
            longitude: 21.899031396129356,
            latitudeDelta: 0.012,
            longitudeDelta: 0.012,
        }}
        >
            {/* Add a Marker with a custom view */}
            <Marker coordinate={{ latitude: 43.32075859905513, longitude: 21.899031396129356 }}>
                <CustomMarkerComponent />
            </Marker>
        </MapView>

        {/* Expand map button */}
        <TouchableOpacity 
            onPress={() => { navigation.goBack() }}
            className="absolute top-8 right-4 rounded-full bg-black p-3">
            <Icon.Minimize strokeWidth={3} stroke='white' />
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ExpandedMapScreen