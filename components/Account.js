import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Account = () => {
  const navi=useNavigation()
  return (
    <View style={{backgroundColor:"#009EEB"}}>
      <View style={styles.container}>
      <View style={{alignItems:"center"}}>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}} style={{width:140,height:140,borderRadius:100,marginBottom:80}}/>

      </View>
        <Text style={{fontSize:20,color:"white",marginBottom:20,fontWeight:600}}>Step 3 of 3</Text>
        <Text style={{fontSize:20,color:"white",marginBottom:20,fontWeight:600}}>Create your Account</Text>
        <View>
            <TextInput placeholder='Full Name' style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}}/>
        </View>
        <View>
            <TextInput placeholder='Email' style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}}/>
        </View> <View>
            <TextInput placeholder='Password' style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}}/>
        </View> 
        <View>
            <TextInput placeholder='Confirm Password' style={{padding:20,fontSize:20,borderBottomWidth:1,borderColor:"white"}}/>
        </View>
     
       
        <TouchableHighlight>
              <Text style={{backgroundColor:"white",height:60,borderRadius:8,textAlign:"center",textAlignVertical:"center",fontSize:22}} onPress={()=>navi.navigate("verification")}>Continue</Text>
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