import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { Ionicons, FontAwesome, Entypo, AntDesign  } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'


const HomeSearch = () => {
    return (
       <View style={styles.container}>
           
           <GooglePlacesAutocomplete
                placeholder='search'
                query={{key:"AIzaSyCC3msMgQgWRG9FBQWvB5JDn7yILgizd28"}}
                renderLeftButton={()=><Ionicons name='location' size={30} color="black" style={{marginRight:2,marginLeft:10}}/>}
                renderRightButton={()=>(
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Entypo name='cross'size={20} color="grey" style={{marginRight:2}}/>
                    <TouchableOpacity style={styles.seracbtn}>
                        <Text>Search</Text>
                    </TouchableOpacity>
                    </View>
                )}
                styles={{
                    textInput:{
                        backgroundColor:'#d1d2d3',
                        height:30,
                       
                    },
                    textInputContainer:{
                        width:310,
                        backgroundColor:'#d1d2d3',
                        marginBottom:5,
                        flexDirection:'row',
                        borderRadius:20,
                        alignSelf:'center',
                        padding:5
                    }
                }}
            />
            <FontAwesome name='filter' size={30} color="black" style={{marginRight:5,marginBottom:10}}/>
            
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        // height:60,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        padding:6,
        marginTop:-5,
        borderBottomStartRadius:10,
        borderBottomEndRadius:10
    },
    seracbtn:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginRight:5,
        borderRadius:15,
        paddingLeft:8,
        paddingRight:8,
        height:19,
        flexDirection:'row'
    },
})

export default HomeSearch
