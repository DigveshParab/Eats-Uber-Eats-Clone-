import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import CategoryList from '../Components/CategoryList'
import HomeHeader from '../Components/HomeHeader'
import HomeSearch from '../Components/HomeSearch'
import PlaceList from '../Components/PlaceList'
import Place from '../Reusables/Place'
import SingleCategory from '../Reusables/SingleCategory'
import data from '../Data/Restaurants'
import TabNavigations from '../Components/TabNavigations'


const HomeScreen = () => {
    const[optionSelected , setoptionSelected] = React.useState('delivery')
    const [displayData,setdisplayData] = React.useState([])
    const [handleSearch,sethandleSearch] = React.useState('panjim')

    const handleService = ()=>{
        setdisplayData(data.filter(data => data.service.includes(optionSelected))) // includes is new way of writing data.services ==== optionelected
    }

    React.useEffect(()=>{
        handleService()
    },[optionSelected])

    return (
        <View style={styles.conatiner}>
            <View style={{marginBottom:10}}>
                <HomeHeader optionSelected={optionSelected} setoptionSelected={setoptionSelected}/>
                <HomeSearch/>
                
            </View>
            <CategoryList/>
            <PlaceList data={displayData} optionSelected={optionSelected}/>
            <TabNavigations/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'white',
        marginTop:-38
    },
})

export default HomeScreen
