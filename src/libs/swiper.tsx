import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Swiper from 'react-native-swiper';
import IMAGES_NAME from '../assets';

const SwiperControl = () => {
  return (
      <Swiper style={styles.wrapper} autoplay={true} activeDotColor={'#7BE495'}>
        <View style={styles.slide}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
        <View style={styles.slide}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
        <View style={styles.slide}>
          <Image source={IMAGES_NAME.IMAGE_SWIPER}/>
        </View>
      </Swiper>
  )
};

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
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
