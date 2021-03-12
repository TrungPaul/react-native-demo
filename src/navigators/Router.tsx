import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SCREEN_NAME from '../config/ScreenName';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const Router = () => (
     <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName='Home'>
        <Stack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} options={{title: 'Welcome screen'}} />
        <Stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} options={{title: 'Welcome Home'}} />
      </Stack.Navigator>
     </NavigationContainer>
)

export default Router;