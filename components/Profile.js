import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
     <View style={{backgroundColor:"#E0E3DA"}}>
<View style={{height:"100%",position:"relative",top:80}}>
      <View style={{alignItems:"center",marginBottom:40}}>
        <Image source={{uri:"https://media.istockphoto.com/id/1446032808/photo/confident-businessman-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=UVo1UY5QGVBTXwF2h4ki_zJIDbdIWs5hUhTuTNMxnNg="}} style={{width:100,height:100,borderRadius:100,marginBottom:6}}/>
        <Text style={{color:"blue",fontSize:16,fontWeight:600}}>Charlottle Smith</Text>
        <View style={{flexDirection:"row",gap:6,alignItems:"center"}}>
        <Image source={{uri:"https://img.freepik.com/free-psd/phone-icon-design_23-2151311652.jpg"}} style={{width:28,height:28,borderRadius:10}}/>
        <Text style={{opacity:0.8}}>Charlottlesmith@gmail.com</Text>
        </View>
      </View>
      <View style={{marginLeft:40}}>
         <View style={{flexDirection:"row",marginBottom:10,gap:8,borderBottomWidth:1,marginBottom:32}}>
             <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7qQAztPzITlNqocnZCS15iQtNRhOgYrCQQ&s"}} style={{width:40,height:40,borderRadius:10,marginBottom:8}}/>
             <View style={{flexDirection:"row",justifyContent:"space-between",width:"80%",alignItems:"center"}}>
                <Text style={{fontSize:18}}>Harvard University</Text>
                <Text style={{fontSize:24}}> > </Text>
             </View>
         </View>
         <View style={{flexDirection:"row",marginBottom:10,gap:8,borderBottomWidth:1}}>
             <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7qQAztPzITlNqocnZCS15iQtNRhOgYrCQQ&s"}} style={{width:40,height:40,borderRadius:10,marginBottom:8}}/>
             <View style={{flexDirection:"row",justifyContent:"space-between",width:"80%",alignItems:"center"}}>
                <Text style={{fontSize:18}}>Edit Profile</Text>
                <Text style={{fontSize:24}}> > </Text>
             </View>
         </View>
      </View>
      <View style={{flexDirection:"row",marginLeft:40,justifyContent:"space-between"}}>
         <Text style={{color:"red",fontSize:20}}>Become a udliverer</Text>
         <Text style={{marginRight:24,fontSize:24}}> > </Text>
      </View>
    </View>
     </View>
  )
}

export default Profile

const styles = StyleSheet.create({})