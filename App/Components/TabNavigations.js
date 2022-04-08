import { TouchableOpacity, StyleSheet,Text, View } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';


const btns=[
    {
        id:1,
        title:"Home",
        icon:'home',
        navigation:'',

    },
    {
        id:2,
        title:"Browse",
        icon:'magnifying-glass',
        navigation:'',

    },
    {
        id:3,
        title:"Orders",
        icon:'shopping-cart',
        navigation:'',

    },
    {
        id:4,
        title:"Grocery",
        icon:'shopping-bag',
        navigation:'',

    },
    {
        id:5,
        title:"Account",
        icon:'user',
        navigation:'',

    }
]



const reuseTab = (name,title,index)=>{
    
    return(
        <TouchableOpacity key={index} onPress={()=>setisActive(title)} style={{width:40,height:40,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
           <Entypo  name={name} size={30} color={title === isActive?'black':'grey'}/>
           <Text style={{fontSize:12,fontWeight:'bold'}}>{title}</Text>

        </TouchableOpacity>
    )
}


const TabNavigations = () => {
    const[isActive,setisActive] = React.useState(null)
  return (
    <View style={styles.conatiner}>
        <TouchableOpacity  onPress={()=>setisActive("Home")} style={{width:40,height:40,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
           <Entypo  name='home' size={30} color={isActive === 'Home'?'black':'grey'}/>
           <Text style={{fontSize:12,fontWeight:'bold'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>setisActive("Browse")} style={{width:40,height:40,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
           <Entypo  name='magnifying-glass' size={30} color={isActive === 'Browse'?'black':'grey'}/>
           <Text style={{fontSize:12,fontWeight:'bold'}}>Browse</Text>
        </TouchableOpacity>


        <TouchableOpacity  onPress={()=>setisActive("Orders")} style={{width:70,height:70,justifyContent:'center',alignItems:'center',marginLeft:5,marginRight:5,borderRadius:50,backgroundColor:'white',padding:10}}>
           <Entypo  name='shopping-cart' size={30} color={isActive === 'Orders'?'green':'grey'}/>
           <Text style={{fontSize:12,fontWeight:'bold'}}>Orders</Text>
        </TouchableOpacity>


        <TouchableOpacity  onPress={()=>setisActive("Grocery")} style={{width:40,height:40,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
           <Entypo  name='shopping-bag' size={30} color={isActive === 'Grocery'?'black':'grey'}/>
           <Text style={{fontSize:12,fontWeight:'bold'}}>Grocery</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>setisActive("Account")} style={{width:40,height:40,justifyContent:'center',alignItems:'center',marginLeft:10,marginRight:10}}>
           <Entypo  name='user' size={30} color={isActive === 'Account'?'black':'grey'}/>
           <Text style={{fontSize:12,fontWeight:'bold'}}>Account</Text>
        </TouchableOpacity>

    </View>
  );
};

export default TabNavigations;

const styles = StyleSheet.create({
    conatiner:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:20
    },
});
