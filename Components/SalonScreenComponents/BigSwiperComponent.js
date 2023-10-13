import React, {useState, useRef, useEffect} from 'react'
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { Video, ResizeMode } from 'expo-av'


const SwiperVideoComponent = ({ data }) => {

  const video = useRef(null)
  const [status, setStatus] = useState({})


  return (
    <TouchableWithoutFeedback>
      <View className="shadow-xl h-full relative">
        <Video
            className="h-full"
            ref={video}
            source={data.src}
            useNativeControls={false}
            resizeMode={ResizeMode.COVER}
            isMuted
            isLooping
            shouldPlay
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
      </View>
    </TouchableWithoutFeedback>
  )
}

const SwiperImageComponent = ({ data }) => {

  return (
    <TouchableWithoutFeedback>
      <View className="shadow-xl h-full relative">
        <Image className="w-full h-full" source={data.src}/>
      </View>
    </TouchableWithoutFeedback>
  )
}

// Define your view data here
const views = [
  {
    type: 'image',
    src: require("../../assets/images/test/man.jpg"),
  },
  {
    type: 'video',
    src: require("../../assets/images/test/dusan_barber.mp4"),
  },
  {
    type: 'video',
    src: require("../../assets/images/test/reklama.mp4"),
  },
]

const BigSwiperComponent = () => {

  const swiperPaginationElement = <View className="bg-white w-2 h-2 rounded-2xl m-1 mb-7" />
  const activeSwiperPaginationElement = <View className="bg-[#EF5B24] w-2 h-2 rounded-2xl m-1 mb-7" />

  return (
    <View className="relative w-full h-72 bg-red-500">
      <Swiper 
        className="h-full" 
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
    </View>
  )
}

export default BigSwiperComponent