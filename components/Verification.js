import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Verification = () => {
  const navi=useNavigation()
  return (
    <View backgroundColor="#009EEB">
     <View style={{height:"100%",width:"84%",margin:"auto",marginTop:80}}>
       <Text style={{color:"white",fontWeight:600,fontSize:20,marginBottom:80}}>Enter Your Verification Code</Text>
       <Text style={{color:"white",fontWeight:600,fontSize:18,marginBottom:80,textAlign:"center"}}>Please type the Verification code send to charlottesmith@gmail.com Edit</Text>
       <View style={{flexDirection:"row",justifyContent:"center",gap:16}}>
       <View style={{borderWidth:4,height:48,borderRadius:100,width:48,alignItems:"center",justifyContent:"center",borderColor:"white"}}>
         <Text style={{color:"white",fontSize:20}}>2</Text>
       </View>
       <View style={{borderWidth:4,height:48,borderRadius:100,width:48,alignItems:"center",justifyContent:"center",borderColor:"white"}}>
         <Text style={{color:"white",fontSize:20}}>4</Text>
       </View>
       <View style={{borderWidth:4,height:48,borderRadius:100,width:48,alignItems:"center",justifyContent:"center",borderColor:"white"}}>
         <Text style={{color:"white",fontSize:20}}>6</Text>
       </View>
       <View style={{borderWidth:4,height:48,borderRadius:100,width:48,alignItems:"center",justifyContent:"center",borderColor:"white"}}>
         <Text style={{color:"white",fontSize:20}}>8</Text>
       </View>
       </View>
       <TouchableHighlight>
         <Text style={{backgroundColor:"white",height:60,borderRadius:4,textAlign:"center",textAlignVertical:"center",fontSize:20,fontWeight:600,marginTop:40}} onPress={()=>navi.navigate("home")}>Verify</Text>
       </TouchableHighlight>
       <Text style={{color:"white",textAlign:"center",marginTop:20,fontWeight:600,borderBottomColor:"white",borderBottomWidth:1}}>Resend Code</Text>
     </View>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({})