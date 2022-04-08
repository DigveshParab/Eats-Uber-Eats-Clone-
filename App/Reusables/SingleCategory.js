import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'

const SingleCategory = ({image,category}) => {
    return (
        <View style={styles.conatiner}>
            <Image source={image} style={{width:45,height:45}} />
            <Text style={{fontSize:13,fontWeight:'bold',width:100,textAlign:'center'}}>{category}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner:{
        width:70,
        height:45,
        marginTop:10,
        marginLeft:12,
        marginRight:12,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
})

export default SingleCategory
