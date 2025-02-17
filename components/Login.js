import {Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



const Login = () => {
    const [email,setEmail]=useState()
    const[pass,setPass]=useState()
    const[status,setStatus]=useState(false)
    const navi=useNavigation();

   const handlerLogin= async ()=>{
   console.log("local storage"); 
   let ab= await AsyncStorage.getItem("email")
   console.log("data",ab);
   
   const localEmail=ab;
    if(email==localEmail){
        setStatus(true)
        navi.navigate("Home") 
    }
    else{
        setStatus(false)
    }
    }

  return (
    <View style={{backgroundColor:"blue",height:"100%",alignItems:"center"}}>
       <View style={{height:"100%",width:"80%"}}>
         <View style={{alignItems:"center"}}>
            <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png"}} style={{width:140,height:140,borderRadius:100,backgroundColor:"white",marginTop:40}}/>  
         </View>
         <View style={{marginTop:100}}>
         <Text style={{fontSize:20,color:"white",marginBottom:10}}>Login your Account</Text>
              <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
                  <Image source={{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F10%2FMessage-Transparent-File.png&f=1&nofb=1&ipt=da09f1d80504a2c3c40237003ac996b0defb4c61c132617aa08552bc397064ca&ipo=images"}} style={{width:20,height:20}}/>
                  <TextInput placeholder='Email' style={{fontSize:20,padding:10}} onChangeText={(item)=>setEmail(item)}/>
              </View>
              <Text style={{borderBottomWidth:1,width:"100%"}}></Text>
              <View style={{flexDirection:"row",alignItems:"center",gap:4,marginTop:16,justifyContent:"space-between"}}>
                  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                      <Image source={{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F36262552%2Fr%2Fil%2F0b04a5%2F4248120438%2Fil_1080xN.4248120438_mgc6.jpg&f=1&nofb=1&ipt=b3bda6755283e179d81d6c53d8b96b404cc61fbbb170ade1b586faafe4daabf3&ipo=images"}} style={{width:40,height:40,borderRadius:100}}/>
                      <TextInput placeholder='Password' style={{fontSize:20,padding:10}} secureTextEntry={true} onChangeText={(item)=>setPass(item)}/>
                  </View>
                  <Text style={{color:"white",fontWeight:600,fontSize:18}}>Show</Text>
              </View>
              <Text style={{borderBottomWidth:1,width:"100%"}}></Text>
              <TouchableHighlight style={{backgroundColor:"white",height:48,borderRadius:4,marginTop:14,justifyContent:"center"}}>
                  <Text style={{textAlign:"center",fontSize:20}} onPress={()=>handlerLogin()}>Login</Text>
              </TouchableHighlight>
             {status? <Text>Sucessfuly</Text>:<Text style={{marginTop:6}}>Data is not store in localstorage</Text>}
         </View>
       </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})