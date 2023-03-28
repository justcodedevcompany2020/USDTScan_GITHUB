import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper'
import CoinCard from './CoinCard';
import {Carousel} from 'react-native-auto-carousel';
export const Sw = ({data}) => {
    const IMAGES = ['../images/1.png', '../images/2.png', '../images/3.png']
return <Carousel
      data={data}
      renderItem={item => (
        <CoinCard onPressIn ={()=>setHold(false)} onPressOut = {()=>setHold(true)}  title = {item?.symbol} price ={item?.lastPrice} procent = {item?.priceChangePercent}/>
        
      )}
    />
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      }
});
