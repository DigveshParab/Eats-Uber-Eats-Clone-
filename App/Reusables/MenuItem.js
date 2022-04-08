import React from 'react'
import { Image } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from 'react-redux';



const MenuItem = ({description,imageurl,name,price,restaurantName}) => {

    const[textfull,settextfull] = React.useState(false)
    const[boxActive,setboxActive] = React.useState(false)

    // redux data
    const cartItems = useSelector((state)=>state.cartReducer.selectedItems.items)
    console.log(cartItems,'😠')

    const isFoodCart = (name,cartItems)=>Boolean(cartItems.find(item=>item.name === name))
    // console.log(isFoodCart())
    // reu=dux material
    const dispatch = useDispatch()

    const selectItem = (item)=> dispacth({
        type:'ADD_TO_CART',
        payload:item
    })
    

    // React.useEffect(()=>{
    //     console.log(isFoodCart())
    // },[cartItems])
    // const description = '1/2 kg contains 3-4 pcs fresh chicken are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.'
    return (
        <View style={textfull?styles.container2:styles.container}>
            
            
            {/* checkboc */}
            <View style={{width:'10%',height:175,backgroundColor:'white',justifyContent:'center',marginLeft:10}}>
                {/* <View style={{width:20,height:20,backgroundColor:'grey'}}></View> */}
                <BouncyCheckbox 
                    isChecked={isFoodCart(name,cartItems)}
                    onPress={(isChecked ) => {
                        if (isChecked) {
                            dispatch({
                                type:'ADD_TO_CART',
                                payload:{description,imageurl,name,price,restaurantName,isChecked}
                            })
                        }else{
                            dispatch({
                                type:'DELETE_ITEM',
                                payload:name
                            })
                        }
                    }} 
                    fillColor='#6dd644'
                    iconStyle={{borderColor:'lightgrey',borderRadius:0}}
                />
            </View>


            {/* item info */}
            <View style={{width:'50%',height:"100%"}}>
                
                {description.length > 80 ?
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:textfull?10:20}}>{name}</Text>
                    :
                    <Text style={{fontSize:20,fontWeight:'bold',marginTop:40}}>{name}</Text>}
                
                {
                    description.length > 80 ? textfull?
                    <Text style={{color:'grey',marginTop:-3}}>{description}...<Text onPress={()=>settextfull(false)} style={{color:'black',fontSize:12}}>Read less</Text></Text>
                    :
                    <Text style={{color:'grey',marginTop:2}}>{description.slice(0,50)}...<Text onPress={()=>settextfull(true)} style={{color:'black',fontSize:12}}>Read more</Text></Text>
                :<Text style={{marginTop:0}}>{description}</Text>}
                
                {textfull?<Text></Text>:<Text style={{marginTop:10,fontWeight:'bold'}}>Rs. {price}</Text>}
            
            </View>
            

            {/* image */}
            <View style={{width:'30%',height:"80%",marginRight:10,borderRadius:20}}>
                
                <Image source={{uri:imageurl}} style={{width:'100%',height:'100%',borderRadius:10,marginTop:20}}/>
               
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:190,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:.27,
        borderBottomColor:'grey',
        paddingTop:8,
        paddingBottom:8,
        borderTopStartRadius:20,borderTopEndRadius:20
        
        
        
    },
    container2:{
        width:'100%',
        height:185,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:0,
        borderBottomColor:'grey',
        paddingTop:8,
        paddingBottom:8,
        borderTopStartRadius:20,borderTopEndRadius:20,
        zIndex:100
    }
})

export default MenuItem
