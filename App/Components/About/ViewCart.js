import { TouchableOpacity, Text, StyleSheet,Modal, ScrollView,TouchableWithoutFeedback,Pressable, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

//firebase
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../../Firebase'
import { useNavigation } from '@react-navigation/native';

const ViewCart = ({total}) => {
  const[modalVisible,setmodalVisible]= React.useState(false)
  const selecteditem = useSelector((state)=>state.cartReducer.selectedItems.items)
  const restaurantName = useSelector((state)=>state.cartReducer.restaurantName)
  const [loadingScreen,setloadingScreen] = React.useState(false)
  const navigation = useNavigation()

  // handle placing order
  const handleOrder = async(foods,totalPrice)=>{
    setloadingScreen(true)
    const collectionRef = collection(db,'orders')
    const addItem = await addDoc(collectionRef,{...foods.map(item=>{return{
      name:item.name,
      price:item.price,
      restaurant:item.restaurantName
    }})})
    setloadingScreen(false)
    setmodalVisible(false)
    navigation.navigate('orderComplete',{data:foods,total:totalPrice})
    
    console.log(addItem)
  }



  const item=(food,index)=>{
    return(
      <>
      <View key={index} style={{width:'100%',height:20,flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
          <Text style={{marginLeft:15,fontSize:16}}>{food.name} </Text>
          <Text style={{marginRight:15}}>Rs.{food.price}</Text>
      </View>
      <View style={{width:'90%',height:2,backgroundColor:'#c9c5c5',alignSelf:'center',marginTop:8}}></View>
      </>

    )
  }




  const checkoutContent =()=>{
    return (
      <View style={{width:'100%',height:370,alignItems:'center',marginTop:-160,backgroundColor:'white',borderTopStartRadius:20,borderTopEndRadius:20}}>
        <TouchableOpacity style={{position:'absolute',right:10,top:10}} onPress={()=>setmodalVisible(false)}>
          <AntDesign name="close" size={24} color="black"/>
        </TouchableOpacity>
        <Text style={{fontSize:23,fontWeight:'bold',marginTop:30}}>{selecteditem[0].restaurantName}</Text>
  
        <View style={{width:'90%',height:138,marginTop:10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {selecteditem.map((food,index)=>item(food,index))}
        </ScrollView>

        </View>
        <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <Text style={{marginLeft:40,fontSize:19,fontWeight:'bold'}}>Subtotal</Text>
          <Text style={{marginRight:40,fontSize:19,fontWeight:'bold'}}>{total}.Rs</Text>
        </View>
        <TouchableOpacity onPress={()=>handleOrder(selecteditem,total)} style={{width:300,height:50,borderRadius:50,marginTop:20,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Checkout</Text>
        </TouchableOpacity>

      </View>
    )
  }



  return (
    <>
    
    {/* checkout box modal */}
    <Modal 
      statusBarTranslucent={true}  
      animationType='slide' 
      visible={modalVisible} 
      transparent={true}
       
      onRequestClose={()=>setmodalVisible(false)}
    >
      <Pressable onPress={()=>setmodalVisible(false)} style={{width:'100%',height:460,backgroundColor:'black',opacity:.6}} ></Pressable>
      {checkoutContent()}
    </Modal>

    {/* loadingScreen modal */}
    <Modal 
      statusBarTranslucent={true}  
      animationType='slide' 
      visible={loadingScreen} 
      transparent={true}
       
      onRequestClose={()=>setmodalVisible(false)}
    >
      <View style={{backgroundColor:'rgb(0, 0, 0)',flex:1,alignItems:'center',justifyContent:'center',opacity:0.7}}>
        <View style={{width:100,height:100}}>
          <LottieView source={require('../../../assets/animations/scanner.json')} autoPlay loop />
        </View>
      </View>
    </Modal>
    
    <TouchableOpacity style={styles.conatiner} onPress={()=>setmodalVisible(true)}>
        <Text style={{color:'white',fontWeight:'900',fontSize:20}}>View Cart</Text>
        <Text style={{color:'white',position:'absolute',right:0,marginRight:15}}>Rs {total}</Text>
    </TouchableOpacity>
    </>
  );
};


const styles = StyleSheet.create({
  conatiner:{
        width:250,
        height:40,
        backgroundColor:'black',
        borderRadius:50,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowRadius:10,
        shadowOpacity:.5,
        position:'absolute',
        bottom:35

    },
});

export default ViewCart;
