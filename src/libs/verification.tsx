import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
 
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
 
const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 55,
    fontSize: 26,
    borderWidth: 2,
    borderColor: '#E0ECDE',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    color: 'gray',
    borderRadius: 15,
  },
  focusCell: {
    borderColor: '#7BE495',
    color: '#7BE495',
  },
  typedCell: {
    borderColor: '#56C596',
    backgroundColor: "#56C596",
    color: 'white',
    borderRadius: 15,
  },
});
 
const CELL_COUNT = 4;
 
const Verification = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
 
  return (
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell, symbol !== '' && styles.typedCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
  );
};
 
export default Verification;