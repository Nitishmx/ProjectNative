import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
    const navi=useNavigation()
    const listdata=[
        {image:"https://cdn.pixabay.com/photo/2021/11/15/23/30/bell-6799634_640.png",title:"Push Notification",arrow:">"},
        {image:"https://static.vecteezy.com/system/resources/previews/000/379/559/non_2x/edit-profile-vector-icon.jpg",title:"Edit Profile",arrow:">"},
        {image:"https://i.etsystatic.com/36262552/r/il/0b04a5/4248120438/il_fullxfull.4248120438_mgc6.jpg",title:"Change Password",arrow:">"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9vTetSB0r9FCM9E0Wsc_jGaqrHL-LERPyQ&s",title:"About Us",arrow:">"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIdg52Soj-Y7WenVljg_ZVvTPfVRZn_NXmw&s",title:"Term & Conditions",arrow:">"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAcRpzyc9jcoJvHOhqdFb3DwFtA4cHuct4g&s",title:"Privacy Policy",arrow:">"},
        {image:"https://png.pngtree.com/png-vector/20191027/ourmid/pngtree-calling-telephone-line-icon-vector-png-image_1885981.jpg",title:"Contact Us",arrow:">"},
        {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZ3wldcL4dCjGMEX0vij_ERah5lZxmunPnw&s",title:"Share App",arrow:">"},
        {image:"https://static.vecteezy.com/system/resources/previews/015/151/187/non_2x/rate-phone-app-icon-flat-customer-feedback-vector.jpg",title:"Rate App",arrow:">"},
        {image:"https://cdn-icons-png.flaticon.com/512/1214/1214428.png",title:"Delete Account",arrow:">"}
    ]
  return (
    <ScrollView>
          <View>
      <FlatList data={listdata}
        renderItem={({item})=>( <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottomWidth:1}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
            <Image source={{uri:item.image}} style={{width:40,height:40,marginBottom:10,marginTop:12}}/>
            <Text style={{fontWeight:600,fontSize:20}} onPress={()=>navi.navigate("change Password")}>{item.title}</Text>
        </View>
         <Text style={{marginRight:10,fontSize:24}}> {item.arrow} </Text>
      </View>)}
      />
      <TouchableHighlight>
          <View style={{flexDirection:"row",backgroundColor:"red",width:280,height:48,margin:"auto",marginTop:40,borderRadius:10,gap:24,justifyContent:"center",alignItems:"center"}}>
              <Image source={{uri:"https://cdn.arrowpng.com/images/large/red-right-arrow.png"}} style={{width:40,height:40,borderRadius:10}}/>
              <Text style={{fontSize:20,color:"white"}} onPress={()=>navi.navigate("login")}>Log out</Text>
          </View>
      </TouchableHighlight>
          </View>
    </ScrollView>
  )
}

export default Setting

const styles = StyleSheet.create({})