import { View, Text, StyleSheet, ScrollView, StatusBar, Pressable } from 'react-native';
import React from 'react';
import ReviewItem from '../Reusables/ReviewItem';
import LottieView from 'lottie-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

const OrderReviewScreen = () => {
    const routes = useRoute()
    console.log(routes.params)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleClear = ()=>{
        dispatch({
            type:'CLEAR_CART'
        })
        navigation.navigate('HomeScreen')
    }
  return (
    <View style={styles.conatiner}>

        {/* ok aimationk */}
        <View style={{width:'100%',height:70,marginBottom:50,marginTop:35}}>
            <LottieView source={require('../../assets/animations/check-mark.json')} autoPlay loop  style={{alignSelf:'center',height:100}}/>
        </View>
      {/* order message */}


      <Text style={{width:'99%',fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:10,marginBottom:10,padding:5}}>Your order at fig restaurant has been placed for Rs.{routes.params.total}. 🔥</Text>
      
      
      {/* item list */}
      <View style={{width:'100%',height:220}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {routes.params.data.map((item,index)=><ReviewItem key={index} name={item.name} imageurl={item.imageurl} price={item.price}/>)}
          </ScrollView>
      </View>


      {/* animation */}
      <View style={{width:'100%',height:90,marginTop:5}}>
            <LottieView source={require('../../assets/animations/cooking.json')}  autoPlay loop  style={{alignSelf:'center',height:100}}/>
        </View>


      {/* backhome button */}
      <Pressable onPress={handleClear} style={{width:150,height:40,backgroundColor:'black',borderRadius:20,alignSelf:'center',marginTop:40,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:15,color:'white',fontWeight:'bold'}}>Home</Text>
      </Pressable>
      <StatusBar hidden={true}/>
    </View>
  );
};


const styles = StyleSheet.create({
  conatiner:{
        flex:1,
        backgroundColor:'white',marginTop:15
  },
});

export default OrderReviewScreen;
