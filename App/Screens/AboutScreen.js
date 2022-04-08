import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import MenuItem from '../Reusables/MenuItem';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import ViewCart from '../Components/About/ViewCart';
import {useSelector} from 'react-redux'

const fakeData = {
    name:"Uncle Tilly's",
    image:'http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg',
    categories:[
        {
            id:1,
            title:'Italian'
        },
        {
            id:2,
            title:' Fast Food'
        },
        {
            id:3,
            title:'Beverages'
        },
        {
            id:4,
            title:'Pizza'
        },

    ],
    reviews:200,
    ratings:3
}



const AboutScreen = () => {
    const[saved,setsaved] = React.useState(false)
    const item = useSelector((state)=>state.cartReducer.selectedItems.items)

   // total using reduce
   const total = item
        .map(item=>item.price)
        .reduce((prev,curr)=>prev + curr,0)

    
//    console.log(item,'selected ','total=',total)
    // if we had yelp connection
    const{name,image,reviews,categories} = fakeData
    const allCategories = categories.map(cat=>cat.title).join('  -  ') // this will join all obj in array and inbetween add "-"
    const description = `${allCategories} `

    // data from routes 
    const routes = useRoute().params
    // console.log(routes)
    const{imageurl,placeName,ratings,deliveryIn,menu} = routes


    return (
        <View style={styles.conatiner}>
            {/* image */}
            <Image source={{uri:imageurl}} style={{width:'100%',height:200}}/>
            
            
            {/* infoboc */}
            <View style={{backgroundColor:'white',width:'100%',height:115,borderBottomEndRadius:20,borderBottomStartRadius:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontWeight:'bold',fontSize:22,marginLeft:15,marginTop:5,width:270}}>{placeName}</Text>
                    {saved?<FontAwesome name="bookmark" onPress={()=>setsaved(!saved)} size={24} color="black" style={{marginRight:15,marginTop:10}} />:<FontAwesome name="bookmark-o" size={24} onPress={()=>setsaved(!saved)} color="black" style={{marginRight:15,marginTop:10}} />}
                </View>                
                <Text style={{marginLeft:15}}>{description}</Text>
                <Text style={{marginLeft:15,marginTop:3}}>{`${ratings}⭐- (${reviews}+)`}</Text>
            </View>
            
            
            {/* menu */}
            <View style={{width:'100%',height:'53.5%',backgroundColor:'white',marginTop:10,borderTopStartRadius:20,borderTopEndRadius:20}}>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                    <View style={{width:'20%',height:2,backgroundColor:'grey',alignSelf:'center',opacity:.4,marginTop:5}}></View>
                    {menu.map(item=><MenuItem key={item.id} {...item} restaurantName={name}/>)}
                    
                </ScrollView>
                {item.length >=1?<ViewCart total={total}/>:<Text></Text>}
                

            </View>
            
            
            {/* <View>
                <Button/>
            </View> */}
            <StatusBar style='light' />
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#d1d2d3'

    },
})

export default AboutScreen
