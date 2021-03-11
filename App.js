/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Image,
  Dimensions
} from 'react-native';

import './src/locales';
import IMAGES_NAME from './src/assets';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ButtonControl from './src/libs/button-control';
import SwiperControl from './src/libs/swiper';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.logo}>
            <Image source={IMAGES_NAME.LOGO}/>
          </View>
          <View>
            <Text style={styles.firstText}>
              This is Health UX Kit,{"\n"}Welcome!
            </Text>
          </View>
          <View >
            <Text style={styles.secondText}>
            A health vertical UI kit made with{"\n"}
            love for Adobe XD
            </Text>
          </View>
        </View>
        <View style={{top: 600}}>
          <SwiperControl />
        </View>
        <View style={{top: 640}}>
          <ButtonControl/>
        </View>
        {/* <View style={styles.container}>
          <View>
            <Image style={{height:HEIGHT-50,with: 100, position:'absolute'}}>
              11
            </Image>
            <Text style={}>cnhh</Text>
          </View>

        </View> */}
      </SafeAreaView>
    </>
  );
};
// const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  logo: {
    top:30,
    alignItems: 'center',
  },
  firstText: {
    top:77,
    color: "#205072",
    fontSize: 21,
    textAlign: "center",
  },
  secondText: {
    top:111,
    fontSize: 13,
    color: "#68B2A0",
    textAlign: "center"
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
