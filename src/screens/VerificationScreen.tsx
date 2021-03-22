
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import IMAGES_NAME from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonControl from '../libs/button-control';
import Verification from '../libs/verification';

const VerificationScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Image source={IMAGES_NAME.LOGO} />
            <Text style={styles.firstText}>
            Verify your number with{'\n'}
            codes sent to you
            </Text>
          </View>
          <View style={{marginTop: 50, height: HEIGHT / 2}}>
            <Verification />
            <Text style={styles.thirdText}>
            I didn’t receive the code, <Text style={styles.loginText}> Resend</Text>
            </Text>
          </View>
        </View>

        <View style={{height: 100, alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}>
            <ButtonControl label={'CONTINUE'}/>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
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
  thirdText: {
    marginTop: 30,
    fontSize: 13,
    color: '#68B2A0',
    textAlign: 'center',
  },
  loginText:{
    color: 'gray'
  },
});

export default VerificationScreen;
