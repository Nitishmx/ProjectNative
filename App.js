import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './components/Welcome'
import Home from './components/Home'
import DeliverOrder from './components/DeliverOrder'
import Account from './components/Account'
import Verification from './components/Verification'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Delaware from './components/Delaware'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Stack=createNativeStackNavigator()
const Tap=createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ff" component={Welcome} options={{title:"",headerShown:false}}/>
            <Stack.Screen name="university" component={Home} options={{headerStyle:{
              backgroundColor:"#009EEB"
            },headerTintColor:"white",title:""}}/>
            <Stack.Screen name="delivery" component={DeliverOrder} options={{headerStyle:{
              backgroundColor:"#009EEB"
            },headerTintColor:"white",title:""}}/>
            <Stack.Screen name="account" component={Account} options={{headerStyle:{
              backgroundColor:"#009EEB"
            },headerTintColor:"white",title:""}}/>
            <Stack.Screen name="verification" component={Verification} options={{headerStyle:{
              backgroundColor:"#009EEB"
            },headerTintColor:"white",title:""}}/>
            <Stack.Screen name="home" component={Delaware} options={{headerShown:false}}/>    
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})