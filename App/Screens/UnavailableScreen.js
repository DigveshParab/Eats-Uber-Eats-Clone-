import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const UnavailableScreen = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <View style={{width:200,height:200}}>
            <LottieView  source={require('../../assets/animations/91843-working-with-ux.json')} autoPlay loop  style={{alignSelf:'center',height:'100%',width:'100%'}}/>
        </View>
      <Text>This Feature is Not available at the moment</Text>
    </View>
  );
};

export default UnavailableScreen;
