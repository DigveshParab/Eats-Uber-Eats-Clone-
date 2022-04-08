import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';


const fakedata={
    id:1,
    name:'Chicken Hyderabadi Dum Biryani',
    description:'1/2 kg contains 3-4 pcs fresh chicken are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi.',
    price:460,
    imageurl:'https://b.zmtcdn.com/data/dish_photos/5c5/6c0f4aa1c36d985d234d43551a9e95c5.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*'

}

const ReviewItem = ({imageurl,price,name}) => {
  return (
      <>
    <View style={styles.conatiner}>
      <View style={{height:'100%',justifyContent:'center'}}>
            <Text style={{fontSize:17,width:200,fontWeight:'bold',marginLeft:15}}>{name}</Text>
            {/* <Text style={{fontSize:15,width:190,marginLeft:15,marginTop:5}}> {fakedata.description.slice(0,75)}...read more</Text> */}
            <Text style={{fontSize:15,width:200,fontWeight:'bold',marginLeft:15,marginTop:5}}>Rs.{price}</Text>

      </View>
      <View style={{width:120,height:'100%',borderRadius:20,marginRight:10}}>
        <Image source={{uri:imageurl}} style={{width:'100%',height:'100%',borderRadius:20}}/>
      </View>
    </View>
    <View style={{width:'90%',height:.4,alignSelf:'center',marginTop:10,backgroundColor:'grey'}}></View>
    </>
  );
};

const styles = StyleSheet.create({
  conatiner:{
    width:'100%',
    height:90,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10,
  },
});

export default ReviewItem;
