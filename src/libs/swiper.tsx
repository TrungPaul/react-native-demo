import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper';
import IMAGES_NAME from '../assets';

const SwiperControl = () => {
  return (
    <Swiper style={styles.wrapper} autoplay={true} activeDotColor={'#7BE495'}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
        <View style={styles.slide2}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simpleaaaaaaaaaaaaaaaaaaaa</Text>
          <Image source={IMAGES_NAME.IMAGE_SWIPER} width={100} height={200}/>
        </View>
      </Swiper>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    height: 100
  },
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
})

export default SwiperControl;
