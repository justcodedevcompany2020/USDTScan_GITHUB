import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import CoinCard from './CoinCard';

export const Swiper = ({data}) => {
    const [hold,setHold] = useState(true)
    return <View style={styles.container}>
    <SwiperFlatList
      autoplay = {hold}
      autoplayDelay={5}
      autoplayLoop = {true}
      data={data}
      
    >
        {data.map((elm,i)=>(
            <View style = {styles.child} key={i} >
                <CoinCard onPressIn ={()=>setHold(false)} onPressOut = {()=>setHold(true)}  title = {elm?.symbol} price ={elm?.lastPrice} procent = {elm?.priceChangePercent}/>
            </View>
        ))}
    </SwiperFlatList>

  </View>
};
const styles = StyleSheet.create({
  child: { 
    justifyContent: 'center',
  },
});