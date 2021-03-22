
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import React from 'react';
import IMAGES_NAME from '../assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonControl from '../libs/button-control';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationScreen = ({navigation}: any) => {
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
            Turn on Notification
            </Text>
          </View>
          <View style={{marginTop: 50, height: HEIGHT / 2}}>
              <View >
                <Image source={IMAGES_NAME.IMAGE_IPHONE}/>
              </View>
          </View> 
        </View>
        <View style={styles.firstNoti}>
          <View style={{backgroundColor: 'white', height: 80, marginTop: 90, marginLeft: 60, width: WIDTH -120, borderRadius: 20, flexDirection: 'row'}}>
            <View style={{backgroundColor: 'white', height: 60, marginTop: 12,marginLeft: -33,  borderRadius: 20, width: WIDTH- 300, flex: 1}}>
              <View >
                <Image source={IMAGES_NAME.LOGO} style={{marginTop: 10, width: 50, resizeMode: 'contain', marginLeft: 10 }}/>
              </View>
            </View>
            <View style={{ flex: 2, flexDirection: 'column'}}>
              <Text style={styles.notiTitle}>
                Healthie™
              </Text>
              <Text style={styles.notiContent}>
                Your weekly report is here
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.allNoti}>
          <View style={{marginTop: 80}}>
            <View style={styles.textNoti}>
              <View style={{height: 50, marginTop:25}}>
                <Image source={IMAGES_NAME.IMAGE_CIRCLE} />
              </View>
              <Text style={styles.listText}>
                Turn on Notification
              </Text>
            </View>
            <View style={styles.textNoti}>
              <View style={{height: 50, marginTop:25}}>
                  <Image source={IMAGES_NAME.IMAGE_CIRCLE} />
              </View>
              <Text style={styles.listText}>
                Turn on Notification
              </Text>
            </View>
            <View style={styles.textNoti}>
              <View style={{height: 50, marginTop:25}}>
                  <Image source={IMAGES_NAME.IMAGE_CIRCLE} />
              </View>
              <Text style={styles.listText}>
                Your weekly report is here
              </Text>
            </View>
          </View>
        </View>
        <View style={{height: 100, alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Verify")}>
            <ButtonControl label={'TURN ON'}/> 
            </TouchableOpacity>
          </View>
          <Text style={{marginTop: 15, color: '#205072'}}>
            Skip this
          </Text>
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
    fontWeight: '600',
  },
  listText: {
    marginTop: 30,
    color: '#205072',
    fontSize: 13,
    fontWeight: '600',
    flex: 2,
    marginLeft: 15
  },
  notiTitle: {
    color: '#329D9C',
    fontWeight: '600',
    flex: 1,
    marginTop: 20
  },
  notiContent: {
    flex: 2,
    fontSize: 10,
    fontWeight: '600',
    color: '#205072',
    marginTop: 8

  },
  textNoti: {
    height: 70,
    marginLeft: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  allNoti: {
    backgroundColor: '#FFFFFF',
    height: 100,
    flex: 3,
  },
  firstNoti: {
    flex: 2,
    height: 20,
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

export default NotificationScreen;
