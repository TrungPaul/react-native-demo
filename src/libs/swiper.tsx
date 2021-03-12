import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper';
import IMAGES_NAME from '../assets';

const SwiperControl = () => {
  return (
      <Swiper style={styles.wrapper} autoplay={true} activeDotColor={'#7BE495'}>
        <View style={styles.slide1}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
        <View style={styles.slide2}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
        <View style={styles.slide3}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
      </Swiper>
  )
};

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default SwiperControl;
