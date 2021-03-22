import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
interface ButtonlProps {
  label?: string;
  onChangeText?: any;
  text?: string;
  placeholder?: string
}
const InputControl = ({label, placeholder}: ButtonlProps) => (
    <TextInput
      style={styles.txtInput}
      placeholder={placeholder}
    />
);
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
  },
  input: {
    height: 40,
    borderRadius: 30,
    borderWidth: 1,
  },
  txtInput: {
    height: 70,
    width: WIDTH - 100,
    backgroundColor: 'white',
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
});

export default InputControl;