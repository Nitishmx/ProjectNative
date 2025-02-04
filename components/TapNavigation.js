import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeliverOrder from './DeliverOrder';
const Tap = createBottomTabNavigator();
const TapNavigation = () => {
  return (
    <Tap.Navigator>
      <Tap.Screen name="Home" component={DeliverOrder} />
    </Tap.Navigator>
  );
};

export default TapNavigation;

const styles = StyleSheet.create({});
