import React from 'react'
import { View, Text, StyleSheet, Platform,StatusBar } from 'react-native'
import BottomTabs from './App/navigation/BottomTabs'
import AboutScreen from './App/Screens/AboutScreen';
import{Provider} from 'react-redux'
import configureStore from './redux/Store';
import OrderReviewScreen from './App/Screens/OrderReviewScreen';
import HomeScreen from './App/Screens/HomeScreen';
import AppNavigation from './App/navigation/AppNavigation';
import UnavailableScreen from './App/Screens/UnavailableScreen';

const store = configureStore()

const App = () => {

    return (
        <Provider store={store}>
        <View style={styles.container} >
            {/* <BottomTabs/> */}
            <AppNavigation/>
            {/* <UnavailableScreen/> */}
            {/* <OrderReviewScreen/> */}
            {/* <AboutScreen/> */}


            
        </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // marginTop:-40,
        marginTop:Platform.OS === 'android'?-10:0,
        backgroundColor:'white'
        
    },
})

export default App
