import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeHeader = ({optionSelected,setoptionSelected}) => {
    return (
        <View style={styles.container}>
            <View style={styles.btnHolder}>
                <TouchableOpacity onPress={()=>setoptionSelected('delivery')} style={{borderRadius:50,paddingLeft:10,paddingRight:10,backgroundColor:optionSelected === 'delivery'?'black':'white'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,color:optionSelected === 'delivery'?'white':'black'}}>Delivery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setoptionSelected('pickup')} style={{borderRadius:50,paddingLeft:10,paddingRight:10,backgroundColor:optionSelected === 'pickup'?'black':'white'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,color:optionSelected === 'pickup'?'white':'black'}}>Pickup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:40
    },
    btnHolder:{
        width:200,
        height:40,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10

    },

})

export default HomeHeader
