import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Place from '../Reusables/Place'




const PlaceList = ({data}) => {
    

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
                {data.map(place=>(<Place key={place.id} menu={place.menu} imageurl={place.imageurl} placeName={place.name} ratings={place.rating} deliveryIn={place.delivery}/>))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'55%'
        // height:'60%'

    },
})

export default PlaceList
