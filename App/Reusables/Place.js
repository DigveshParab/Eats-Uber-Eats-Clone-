import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {useDispatch} from 'react-redux'

const Place = ({imageurl , placeName , ratings , deliveryIn,menu}) => {
    const [isFavourite,setisFavourite] = React.useState(false)
    const navigation = useNavigation()
    const data = {imageurl,placeName,ratings,deliveryIn,menu}
    const dispatch = useDispatch() 
    const handleNavigation = ()=>{
        navigation.navigate('AboutScreen',{...data})
       
    }
    return (
        <View style={styles.conatiner}>
            <View style={{alignItems:'center'}} >
            {/* image */}
                <TouchableOpacity style={{position:'absolute',zIndex:100,top:10,right:30}} onPress={()=>setisFavourite(!isFavourite)}>
                    {isFavourite?<AntDesign name='heart' size={25} color="tomato"/>:<AntDesign name='hearto' size={25} color="#d1d2d3"/>}
                    
                </TouchableOpacity>
                <TouchableOpacity style={{width:'90%',height:190,marginTop:8}} onPress={()=>handleNavigation(data)}>
                    <Image source={{uri:imageurl}} style={{width:'100%',height:190}}/>
                </TouchableOpacity>
                
            </View>
            <View style={styles.infoholder}>
                <View>
                    {/* place name  */}
                    <TouchableOpacity onPress={()=>handleNavigation(data)}>
                        <Text style={{fontSize:20,fontWeight:'bold',marginTop:10,marginBottom:5}}>{placeName}</Text>
                    </TouchableOpacity>
                    {/* order deliver time  */}
                    <Text style={{fontSize:15,fontWeight:'bold',color:'grey',marginBottom:10}}>{deliveryIn}. min</Text>
                </View>
                <View>
                    <Text style={styles.number}>{ratings}</Text>
                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    conatiner:{
        width:'100%',
        height:270,
        backgroundColor:'white',
        marginTop:17,
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        borderTopLeftRadius:7,
        borderTopEndRadius:7
    },
    infoholder:{
        width:'90%',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    number:{
        fontSize:15,
        fontWeight:'bold',
        marginTop:22,
        marginRight:10,
        borderRadius:50,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:'#e8e5e5'
}
})

export default Place
