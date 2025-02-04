import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './components/Route';
import TapNavigation from './components/TapNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
