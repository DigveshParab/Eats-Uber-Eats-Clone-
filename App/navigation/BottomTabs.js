import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import BrowseScreen from '../Screens/BrowseScreen'
import { Entypo, FontAwesome } from '@expo/vector-icons'; 
import AppNavigation from './AppNavigation'


const Tab = createBottomTabNavigator()




const BottomTabs = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:'black',tabBarStyle:{backgroundColor:'#f7f2f2',borderTopEndRadius:20,borderTopStartRadius:20 } }}>
            <Tab.Screen name='Home' component={AppNavigation}  options={{tabBarLabelStyle:{fontSize:13,marginTop:-10},tabBarIcon:({size,color})=><Entypo name='home' size={size} color={color}/>}}/>
            <Tab.Screen name='Browse' component={BrowseScreen} options={{tabBarLabelStyle:{fontSize:13,marginTop:-10},tabBarIcon:({size,color})=><FontAwesome name='search' size={size} color={color}/>}}/> 
            <Tab.Screen name='Orders'component={HomeScreen} options={{tabBarActiveTintColor:'#6dd644',tabBarLabelStyle:{fontSize:13,marginTop:-10},tabBarIcon:({size,color})=><View style={{backgroundColor:'#f7f2f2',borderRadius:50,padding:13,position:'absolute',bottom:0}}><Entypo name='shopping-cart' size={35} color={color}/></View>}}/>
            <Tab.Screen name='Grocery'component={HomeScreen} options={{tabBarLabelStyle:{fontSize:13,marginTop:-10},tabBarIcon:({size,color})=><FontAwesome name='shopping-bag' size={size} color={color}/>}}/>
            <Tab.Screen name='Account'component={HomeScreen} options={{tabBarLabelStyle:{fontSize:13,marginTop:-10},tabBarIcon:({size,color})=><Entypo name='user' size={size} color={color}/>}}/>

        </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    conatiner:{},
})

export default BottomTabs
