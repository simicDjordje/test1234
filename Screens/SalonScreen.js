import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { ScrollHeaderComponent, TopMapComponent, SalonInfoDataComponent, EmployeeCardComponent } from '../Components'

const employees = [
  {
    first_name: "Dusan",
    last_name: "Mladenovic",
    image_src: require("../assets/images/test/employee1.jpg"),
  },
  {
    first_name: "Darko",
    last_name: "Barbara",
    image_src: require("../assets/images/test/employee4.jpg"),
  },
  {
    first_name: "Nenad",
    last_name: "Dzelajlija",
    image_src: require("../assets/images/test/employee3.jpg"),
  },
  {
    first_name: "Jovan",
    last_name: "Milanovic",
    image_src: require("../assets/images/test/employee2.jpg"),
  },
]

const SalonScreen = () => {

    const {params: data} = useRoute()

  return (
    <View className="relative">
    <StatusBar style="light" />
      {/* Scroll header */}
      <ScrollHeaderComponent />
      
      <ScrollView>
            {/* Map with salon location */}
            <TopMapComponent />

            <View className="bg-black rounded-t-3xl px-6 pt-6 -mt-16 min-h-screen">
              {/* Salon info data */}
              <SalonInfoDataComponent />
              {/* Salon employees */}
              {employees.map((employee, index) => <EmployeeCardComponent key={index} employee={employee} index={index} />)}
            </View>
      </ScrollView>
    </View>
  )
}

export default SalonScreen