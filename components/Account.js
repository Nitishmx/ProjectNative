import { Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Account = () => {
const navi=useNavigation()
const [showerror,setShowerror]=useState(false)
const [email,setEmail]=useState();
const [firstname,setFirstname]=useState()
const [password,setPassword]=useState()
const [confirm,setConfirm]=useState()


const storeData = async (key, value) => {		
  try {
    await AsyncStorage.setItem(key, value);
    return {
        success: true
    }
  } catch (error) {
    return {
        success: false,
        error
    }
  }
}

const  HandleNavigate = async () => {
console.log('-------------daa');
let storeEmail = await storeData('email', email);
// console.log('storeEmail',storeEmail)
if(email){

  navi.navigate("verification");
}

}

function HandleEmail(email){
    const reg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if(!reg.test(email)){
      return setShowerror(true)
    }
    else{
      setEmail(email);
      setShowerror(false);
    }
  }
  return (
    <View style={{backgroundColor:"#009EEB"}}>
      <View style={styles.container}>
      <View style={{alignItems:"center"}}>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}} style={{width:140,height:140,borderRadius:100,marginBottom:80}}/>

      </View>
        <Text style={{fontSize:20,color:"white",marginBottom:20,fontWeight:600}}>Step 3 of 3</Text>
        <Text style={{fontSize:20,color:"white",marginBottom:20,fontWeight:600}}>Create your Account</Text>
        <View>
            <TextInput placeholder='firstName' style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}} value={firstname} onChangeText={(item)=>setFirstname(item)}/>
        </View>
        <View>
            <TextInput placeholder='Email' style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}} onChangeText={(item)=>HandleEmail(item)}/>
            {showerror?(<Text style={{color:"red"}}>Please enter valid email</Text>):null}
        </View> <View>
            <TextInput placeholder='Password' secureTextEntry={true} style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}} value={password} onChangeText={(item)=>setPassword(item)}/>
        </View> 
        <View>
            <TextInput placeholder='ConfirmPassword' secureTextEntry={true} style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}} value={confirm} onChangeText={(item)=>setConfirm(item)}/>
        </View>
     
       
        <TouchableHighlight>
              <Text style={{backgroundColor:"white",height:60,borderRadius:8,textAlign:"center",textAlignVertical:"center",fontSize:22}} onPress={()=>HandleNavigate()}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"84%",
        margin:"auto",
        marginTop:60,
    }
})