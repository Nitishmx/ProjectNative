import { Image, StyleSheet, Text, View } from 'react-native'
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
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Setting from './Setting'
import Profile from './Profile'
import Icon from 'react-native-vector-icons/FontAwesome';
import Message from './Message'
import ChangePassword from './ChangePassword'
import Login from './Login'
const Stack=createNativeStackNavigator()
const Tab=createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator  >

          <Tab.Screen name="Home" component={Delaware} options={{headerShown:false,tabBarIcon:()=>{
            return (
              <Icon name="home" size={40} color="black"/>
              // <Icon name="home" size={40} color="#900" />

            )
          }}} />
          <Tab.Screen name='Message' component={Message} options={{headerShown:false}}/>
          <Tab.Screen name='Calender' component={DiningHalls}/>
          <Tab.Screen name='Setting' component={Setting}/>
          <Tab.Screen name='Profile' component={Profile}/>


      </Tab.Navigator>
  );
}

const Route = () => {
  return (
    <>

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
              <Stack.Screen name="Home" component={BottomTabNavigator} options={{title:"Home",headerStyle:{
                backgroundColor:"#009EEB"
              },headerTintColor:"white",headerShown:false}}/>    
              <Stack.Screen name='Dining Halls' component={DiningHalls} options={{headerStyle:{
                backgroundColor:"#009EEB"
              },headerTintColor:"white"}}/>
              <Stack.Screen name='Details' component={Details}/>
              <Stack.Screen name='button' component={BottomTabNavigator}/>
              <Stack.Screen name='change Password' component={ChangePassword}/>
              <Stack.Screen name='login' component={Login} options={{title:"",headerStyle:{
                backgroundColor:"blue"
              }}}/>
                 
          </Stack.Navigator>
          
    </>
  )
}

export default Route



