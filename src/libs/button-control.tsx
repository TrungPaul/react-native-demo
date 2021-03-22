import React from 'react';
import { StyleSheet, Button, Alert, View, Image, Dimensions, Text, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface ButtonlProps {
  label?: string;
}
const ButtonControl = ({label}: ButtonlProps) => (
  <View style={styles.btn}>
      <Text style={styles.text}>
        {label}
      </Text>
  </View>
);
// const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
  },
  btn: {
    backgroundColor: '#7BE495',
    borderRadius:40,
    color: 'white',
    width: 320,
    height: 50,
    padding: 7
  },
  text: {
    textAlign: "center",
    padding: 10,
    color: 'white',
    fontWeight: '600'
  }
});

export default ButtonControl;