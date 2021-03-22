
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import IMAGES_NAME from '../assets';

const HomeScreen = ({navigation}: any) => {
  return (
      <View style={{flex: 1}}>
        <View style={styles.headerHome}>
        {/* <Ionicons name="reorder-four-outline" size={35} /> */}
          
          <View style={{height: 80}}>
          <View style={{backgroundColor:'white', width: 55, height: 55, marginTop: 50, marginLeft: 330, borderRadius: 55/2}}>
            <Image source={IMAGES_NAME.IMAGE_BRAIN}  style={{resizeMode: 'contain',marginTop: 8, marginLeft: 8}}/>
            <View style= {{backgroundColor: '#56c596', height: 12, width: 12, marginLeft: 40, marginTop: -5, borderRadius: 6}}>
            </View>
          </View>
          </View>
          <View style={{marginLeft: 50, marginTop: 30}}>
            <Text style={{color: '#205072',fontSize: 25, fontWeight: '700'}}>
              Good Evening{'\n'} Alexis
            </Text>
            <Text style={{color: '#68B2A0', marginTop: 20, fontSize: 13}}>
              Your target for today is to keep positive mindset{'\n'} and smile to everyone you meet.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 50}}>
            <View style={styles.button1}>
              <Text style= {styles.buttonText}>
                MORE DETAILS
              </Text>
            </View>
            <View style={styles.button2}>
              <Text style= {styles.buttonText}>
                VIEW YOUR PROFILE
              </Text>
            </View>
          </View>
        </View>

        <View style={{height: HEIGHT/3.3,}}>
          <View style={{marginLeft: 30}}>
            <Text style={styles.titleList}>
              What are you doing today?
            </Text>
          </View>
          <View style={{ marginLeft: 30}}>
            <View style={{marginTop: 30,height: 90, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
              <Image source={IMAGES_NAME.IMAGE_BRAIN} />
              <View style={{flexDirection: 'column', width: 250, marginLeft: 20}}>
                <Text style={styles.objJob}>
                   Doctors
                </Text>
                <Text style={styles.jobTitle}>
                Brain Checkout
                </Text>
                <Text style={styles.jobDesc}>
                  Have an appointment today
                </Text>
              </View>
              <View style={{backgroundColor: '#F75010', borderRadius: 20, height: 30, width: 60, marginTop: 15}}>
                <Text style={styles.buttonText}>
                  Set
                </Text>
              </View>
            </View>
            <View style={{marginTop: 30,height: 80, flexDirection: 'row', borderBottomColor: 'grey', borderBottomWidth: 1}}>
              <Image source={IMAGES_NAME.IMAGE_PATH} />
              <View style={{flexDirection: 'column', width: 250, marginLeft: 20}}>
                <Text style={styles.objJob}>
                   Doctors
                </Text>
                <Text style={styles.jobTitle}>
                Brain Checkout
                </Text>
                <Text style={styles.jobDesc}>
                  Have an appointment today
                </Text>
              </View>
              <View style={{backgroundColor: '#F75010', borderRadius: 20, height: 30, width: 60, marginTop: 15}}>
                <Text style={styles.buttonText}>
                  Set
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{marginLeft: 30}}>
            <Text style={styles.titleList}>
            Visit a Specialists
            </Text>
          </View>
          <View style={{width: WIDTH -100, height: 80, backgroundColor: "white", marginLeft: 30,flexDirection: 'row', marginTop: 20, borderRadius: 20}}>
            <Image source={IMAGES_NAME.IMAGE_PATH} style={{marginLeft: 10, marginTop: 10}}/>
              <View style={{flexDirection: 'column', width: 180, marginLeft: 20}}>
                <Text style={styles.objJob}>
                   Doctors
                </Text>
                <Text style={styles.jobTitle}>
                Brain Checkout
                </Text>
                <Image source={IMAGES_NAME.IMAGE_STAR} style={{ marginTop: 10 }}/>
              </View>
              <View style={{backgroundColor: '#F75010', borderRadius: 20, height: 30, width: 60, marginTop: 15}}>
                <Text style={styles.buttonText}>
                  Set
                </Text>
              </View>
          </View>
          <View style= {{ height: 100}}>
        </View>
        </View>
      </View>
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
  headerHome: {
    height: HEIGHT /2.5,
    backgroundColor: '#E0ECDE',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  titleList: {
    marginTop: 30,
    fontSize: 13,
    color: '#205072',
    fontWeight: '700'
  },
  button1: {
    backgroundColor: '#205072', width: WIDTH-300, height: 30, marginLeft: 50,
    borderRadius: 30
  },
  objJob: {
    color: '#205072',
    opacity: 0.3411764705882353,
    fontSize: 10,
    marginTop: 10
  },
  jobDesc: {
    color: '#205072',
    opacity: 0.3411764705882353,
    fontSize: 13,
    marginTop: 5
  },
  jobTitle: {
    color: '#205072',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 5
  },
  button2: {
    backgroundColor: '#68B2A0', width: WIDTH-300, height: 30, marginLeft: 20,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 8
  },
  secondText: {
    marginTop: 50,
    fontSize: 13,
    color: '#68B2A0',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
