
import './src/locales';

import {
  Dimensions,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import { Router } from './src/navigators';

const App = () => {
  return (
    <Router />
  );
};
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export default App;
