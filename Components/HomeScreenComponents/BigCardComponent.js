import React, {useRef, useState} from 'react'
import { View, Text, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import Swiper from 'react-native-swiper'
import { Video, ResizeMode } from 'expo-av'
import { useNavigation } from '@react-navigation/native'


const SwiperVideoComponent = ({ data }) => {

  const video = useRef(null)
  const [status, setStatus] = useState({})
  const navigation = useNavigation() 

  const handleNavigate = () => {
    // if(video.current){
    //   video.current.unloadAsync()
    // }
    navigation.navigate("Salon", {...data})
  }

  return (
    <TouchableWithoutFeedback onPress={handleNavigate}>
      <View className="mt-7 mx-3 shadow-xl h-64 relative">
        <Video
            className="h-full rounded-3xl"
            ref={video}
            source={data.src}
            useNativeControls={false}
            resizeMode={ResizeMode.COVER}
            isMuted
            isLooping
            shouldPlay
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View className="absolute bottom-5 left-5 ">
                <Text className="text-lg text-gray-300">{data.txt1}</Text>
                <Text className="text-3xl font-bold text-gray-50">{data.txt2}</Text>
                <Text className="text-md text-gray-400">{data.txt3}</Text>
            </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const SwiperImageComponent = ({ data }) => {

  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => {navigation.navigate("Salon", {...data})}}>
      <View className="mt-7 mx-3 shadow-xl h-64 relative">
        <Image className="w-full h-full rounded-3xl" source={data.src}/>
        <View className="absolute bottom-5 left-5 ">
            <Text className="text-lg text-gray-300">Novi</Text>
            <Text className="text-3xl font-bold text-gray-50">Barber Bomb</Text>
            <Text className="text-md text-gray-400">Walk-in</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

// Define your view data here
const views = [
  {
    type: 'video',
    src: require("../../assets/images/test/dusan_barber.mp4"),
    txt1: 'Barber shop',
    txt2: '1 NA 1',
    txt3: 'Za dlaku drugačiji'
  },
  {
    type: 'image',
    src: require("../../assets/images/test/man.jpg"),
  },
  {
    type: 'video',
    src: require("../../assets/images/test/reklama.mp4"),
    txt1: 'NOVO',
    txt2: 'Black bee',
    txt3: 'Jer svaki bradonja zna...'
  },
]

const BigCardComponent = () => {

  const swiperPaginationElement = <View className="bg-white w-2 h-2 rounded-2xl m-1 mt-3 mb-3" />
  const activeSwiperPaginationElement = <View className="bg-[#EF5B24] w-2 h-2 rounded-2xl m-1 mt-3 mb-3" />

  return (
    <Swiper 
      className="h-80" 
      autoplay={true} 
      autoplayTimeout={10}
      dot={swiperPaginationElement}
      activeDot={activeSwiperPaginationElement}
      >
      {views.map((item, index) => {
        if(item.type === 'video'){
          return (
            <SwiperVideoComponent key={index} data={item} />
          )
        }else if(item.type === 'image'){
          return (
            <SwiperImageComponent key={index} data={item} />
          )
        }

        return null
      })}
    </Swiper>
  )
}



export default BigCardComponent
