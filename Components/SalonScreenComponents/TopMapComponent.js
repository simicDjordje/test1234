import React, { useEffect } from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { MapStyleDark, MapStyleLight } from '../../Constants/MapStyles'
import { useNavigation } from '@react-navigation/native'


const CustomMarkerComponent = () => {

    return (
        <View className="w-24 h-24">
            <View className="absolute bottom-4 right-4 w-16 h-16 bg-sky-300 rounded-bl-full rounded-tl-full rounded-tr-full rotate-45">
                <View class="relative w-14 h-14">
                    <Image className="absolute top-1 left-1 w-14 h-14 rounded-full -rotate-45" source={require("../../assets/images/test/logo2.jpg")} alt="Logo" />
                </View>
            </View>
            {/* <Image className="w-12 h-12 rounded-full border-2 border-gray-50" source={require("../../assets/images/test/logo2.jpg")} alt="Logo" /> */}
        </View>
    )
}

const TopMapComponent = () => {

    const navigation = useNavigation()

  return (
    <View className="w-full h-72">
      {/* Map */}
      <MapView
        className="w-100 h-72"
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
    </View>
  )
}

export default TopMapComponent
