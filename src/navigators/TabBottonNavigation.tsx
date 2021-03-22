import {HomeScreen, WelcomeScreen, LoginScreen, VerificationScreen, NotificationScreen} from '../screens';
import SCREEN_NAME from '../config/ScreenName';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const TabBottonNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAME.WELCOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAME.VERIFY_SCREEN} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAME.NOTIFICATIONS_SCREEN} component={HomeScreen} />
    </Tab.Navigator>
  );
};
export default TabBottonNavigation;