import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import * as Icon from "react-native-feather"

const EmployeeCardComponent = ({employee, index}) => {
  return (
    <TouchableWithoutFeedback>
        <View className={`${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between rounded-3xl mt-5`}>
            <Image className={`h-36 w-36 ${index % 2 === 0 ? 'rounded-l-3xl' : 'rounded-r-3xl'}`} source={employee.image_src}/>
            <View className={`flex-1 ${index % 2 === 0 ? 'rounded-r-3xl' : 'rounded-l-3xl'} bg-[#111111] flex-col justify-start items-start py-2 px-3`}>
                <Text className="text-gray-200 text-lg">{employee.first_name} {employee.last_name}</Text>
                <View className="flex-row justify-start items-center mt-2">
                    <Icon.Star height="25" width="25" strokeWidth={1} stroke="gray" />
                    <Text className="text-gray-400 text-sm ml-2">(4.3)</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default EmployeeCardComponent