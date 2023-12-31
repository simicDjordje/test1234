import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeScreen, SalonScreen, ExpandedMapScreen } from "../Screens"

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Salon" component={SalonScreen} />
                <Stack.Screen name="Map" component={ExpandedMapScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation