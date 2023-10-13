import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'

const RowCardComponent = ({k}) => {
    
    let imgSrc
    let logoSrc
    let name = ''
    if(k == 1){
        imgSrc = require("../../assets/images/test/c1.jpg")
        logoSrc = require("../../assets/images/test/logo1.jpg")
        name = 'Fade NO.1'
    }

    if(k == 2){
        imgSrc = require("../../assets/images/test/c2.jpg")
        logoSrc = require("../../assets/images/test/logo2.jpg")
        name = 'Barber Bomb'
    }

    if(k == 3){
        imgSrc = require("../../assets/images/test/c3.jpg")
        logoSrc = require("../../assets/images/test/logo3.jpg")
        name = 'Berbernica Sicilija'
    }

  return (
    <TouchableWithoutFeedback>
      <View className="mr-5 mb-2 bg-white rounded-3xl shadow-xl relative">
        <Image className="h-36 w-64 rounded" source={imgSrc} />
        <View className="flex-row items-center absolute bottom-2 left-1">
            <View className="rounded-full mr-2">
                <Image className="h-5 w-5 rounded-full" source={logoSrc} />
            </View>
            <Text className="text-gray-100 text-lg font-bold">{name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default RowCardComponent