import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  <SafeAreaView>
     <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Welcome screen'}} />
        <Stack.Screen name="Welcome1" component={WelcomeScreen} options={{title: 'Welcome screen'}} />
        <Stack.Screen name="Welcome2" component={WelcomeScreen} options={{title: 'Welcome screen'}} />
      </Stack.Navigator>
     </NavigationContainer>
  </SafeAreaView>
}

export default HomeStackNavigation;