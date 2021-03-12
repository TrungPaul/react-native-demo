import React from 'react';
import { StyleSheet, Button, Alert, View, Image, Dimensions, Text } from 'react-native';
import IMAGES_NAME from '../assets';

const ButtonControl = () => (
  <View style={styles.container}>
    {/* <Button
      title="Press me"
      onPress={() => Alert.alert('Simple Button pressed')}
    /> */}
    <Image source={IMAGES_NAME.IMAGE_BUTTON} width={WIDTH} height={HEIGHT} style={styles.btn}/>
    <Text style={styles.text}>
      GET STARTED
    </Text>
  </View>
);
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
  },
  btn: {
    position: "absolute"
  },
  text: {
    position: "absolute",
    color: 'white'
  }
});

export default ButtonControl;