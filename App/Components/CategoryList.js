import React from 'react'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { View, TouchableOpacity } from 'react-native'
import SingleCategory from '../Reusables/SingleCategory'

const categories = [
    {
        id:1,
        name:'Pick-up',
        Image:require('../../assets/images/shopping-bag.png'),
    },
    {
        id:2,
        name:'Drinks',
        Image:require('../../assets/images/soft-drink.png'),
    },
    {
        id:3,
        name:'Bakrey',
        Image:require('../../assets/images/bread.png'),
    },
    {
        id:4,
        name:'Fast Food',
        Image:require('../../assets/images/fast-food.png'),
    },
    {
        id:5,
        name:'Desserts',
        Image:require('../../assets/images/desserts.png'),
    },
    {
        id:6,
        name:'Coffee',
        Image:require('../../assets/images/coffee.png'),
    },
    {
        id:7,
        name:'Deals',
        Image:require('../../assets/images/deals.png'),
    },

]




const CategoryList = () => {
    return (
        <View style={styles.conatiner}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width:'95%',alignSelf:'center'}}>
                {categories.map(category=>(
                    <TouchableOpacity key={category.id} onPress={()=>console.log(category.name)} >
                        <SingleCategory image={category.Image}  category={category.name} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        width:'100%',
        height:65,
        backgroundColor:'white',
        
    },
})


export default CategoryList
