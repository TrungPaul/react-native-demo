
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import SwiperControl from '../libs/swiper';
import ButtonControl from '../libs/button-control';
import IMAGES_NAME from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image source={IMAGES_NAME.LOGO} />
            <Text style={styles.firstText}>
              This is Home Screen
            </Text>
            <Text style={styles.secondText}>
              A health vertical UI kit made with{'\n'}
              love for Adobe XD
            </Text>
          </View>

          <View style={{marginTop: 30, height: HEIGHT / 2}}>
            <SwiperControl />
          </View>
        </View>

        <View style={{height: 150, alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ButtonControl label={'GET STARTED'}/>
            <Text style={styles.thirdText}>
              Already have an account? 
              <Text style={styles.loginText}>
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  logo: {
    marginTop: 30,
    alignItems: 'center',
    fontWeight: '700',
  },
  firstText: {
    marginTop: 20,
    color: '#205072',
    fontSize: 21,
    textAlign: 'center',
    fontWeight: '300',
  },
  secondText: {
    marginTop: 50,
    fontSize: 13,
    color: '#68B2A0',
    textAlign: 'center',
  },
  thirdText: {
    marginTop: 30,
    fontSize: 13,
    color: '#68B2A0',
    textAlign: 'center',
  },
  loginText:{
    color: 'gray'
  },
  highlight: {
    fontWeight: '700',
  },
});

export default WelcomeScreen;
