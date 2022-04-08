import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import AboutScreen from '../Screens/AboutScreen'
import OrderReviewScreen from '../Screens/OrderReviewScreen'

const Stack = createStackNavigator()



const AppNavigation = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='AboutScreen' component={AboutScreen} />
            <Stack.Screen name='orderComplete' component={OrderReviewScreen}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation
