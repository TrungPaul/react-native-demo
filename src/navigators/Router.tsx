import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SCREEN_NAME from '../config/ScreenName';

import {HomeScreen, WelcomeScreen, LoginScreen, VerificationScreen, NotificationScreen} from '../screens';
import TabBottonNavigation from './TabBottonNavigation';

const Stack = createStackNavigator();

const Router = () => (
     <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName='Home'>
        <Stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={TabBottonNavigation} options={{title: 'Welcome Home'}} />
        <Stack.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={WelcomeScreen} options={{title: 'Welcome Home'}} />
        <Stack.Screen name={SCREEN_NAME.LOGIN_SCREEN} component={LoginScreen} options={{title: 'Login Screen'}} />
        <Stack.Screen name={SCREEN_NAME.VERIFY_SCREEN} component={VerificationScreen} options={{title: 'Verification Screen'}} />
        <Stack.Screen name={SCREEN_NAME.NOTIFICATIONS_SCREEN} component={NotificationScreen} options={{title: 'Notification Screen'}} />
      </Stack.Navigator>
     </NavigationContainer>
)

export default Router;