import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React from 'react'

const ChangePassword = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
        <View style={{flexDirection:"row",width:"90%",alignItems:"center",gap:4,marginTop:10}}>
             <Image source={{uri:"https://e7.pngegg.com/pngimages/786/101/png-clipart-password-computer-icons-security-safety-icon-safety-icon-child-safety-lock-thumbnail.png"}} style={{width:40,height:40}}/>
             <TextInput placeholder='Old Password' style={{fontSize:20,color:"white",opacity:0.6}}/>
        </View>
        <Text style={{borderBottomWidth:1,borderColor:"black",width:"90%"}}></Text>
        <View style={{flexDirection:"row",width:"90%",alignItems:"center",gap:4,marginTop:10}}>
             <Image source={{uri:"https://e7.pngegg.com/pngimages/786/101/png-clipart-password-computer-icons-security-safety-icon-safety-icon-child-safety-lock-thumbnail.png"}} style={{width:40,height:40}}/>
             <TextInput placeholder='New Password' style={{fontSize:20,color:"white",opacity:0.6}}/>
        </View>
        <Text style={{borderBottomWidth:1,borderColor:"black",width:"90%"}}></Text>
        <View style={{flexDirection:"row",width:"90%",alignItems:"center",gap:4,marginTop:10}}>
             <Image source={{uri:"https://e7.pngegg.com/pngimages/786/101/png-clipart-password-computer-icons-security-safety-icon-safety-icon-child-safety-lock-thumbnail.png"}} style={{width:40,height:40}}/>
             <TextInput placeholder='Confirm New Password' style={{fontSize:20,color:"white",opacity:0.6}}/>
        </View>
        <Text style={{borderBottomWidth:1,borderColor:"black",width:"90%"}}></Text>
        <TouchableHighlight>
              <Text style={{backgroundColor:"blue",padding:10,width:374,borderRadius:6,marginTop:60,textAlign:"center",fontSize:20,color:"white"}}>Update</Text>
        </TouchableHighlight>

        
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})