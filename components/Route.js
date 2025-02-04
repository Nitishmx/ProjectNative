import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Welcome from './Welcome'
import Home from './Home'
import DeliverOrder from './DeliverOrder'
import Account from './Account'
import Verification from './Verification'
import Delaware from './Delaware'
import DiningHalls from './DiningHalls'
import Details from './Details'
import TapNavigation from './TapNavigation'
const Stack=createNativeStackNavigator()
const Route = () => {
  return (
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
              <Stack.Screen name="home" component={Delaware} options={{title:"Home",headerStyle:{
                backgroundColor:"#009EEB"
              },headerTintColor:"white"}}/>    
              <Stack.Screen name='Dining Halls' component={DiningHalls} options={{headerStyle:{
                backgroundColor:"#009EEB"
              },headerTintColor:"white"}}/>
              <Stack.Screen name='Details' component={Details}/>
          </Stack.Navigator>
  )
}

export default Route

const styles = StyleSheet.create({})