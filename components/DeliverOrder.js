import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const DeliverOrder = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={{color:"white",fontSize:20}}>Step 2 of 3</Text>
        <Text style={{color:"white",fontSize:20,fontWeight:600}}>What is your main purpose of use?</Text>
       <View style={styles.imageorderdeliver}>
          <View style={{alignItems:"center",gap:20}}>
               <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb1TzCoHal19S_zy8dfLNhl62ytyBPUinxQQ&s"}} style={{width:140,height:140,borderRadius:100}}/>
               <Text style={{fontSize:20,color:"white"}}>ORDER</Text>
          </View>
          <View style={{alignItems:"center",gap:20}}>
               <Image source={{uri:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg"}} style={{width:140,height:140,borderRadius:100}}/>
               <Text style={{fontSize:20,color:"white"}}>DELIVER</Text>
          </View>
       </View>
       <TouchableHighlight>
          <Text style={styles.buttonstyle} onPress={()=>props.navigation.navigate("account")}>Continue</Text>
       </TouchableHighlight>
      </View>
    </View>
  )
}

export default DeliverOrder

const styles = StyleSheet.create({
    main:{
        backgroundColor:"#009EEB",
        height:"100%",
        width:"100%"
    },
    container:{
        width:"82%",
        margin:"auto",
        height:"60%",
        gap:16
    },
    buttonstyle:{
        backgroundColor:"white",
        height:48,
        borderRadius:6,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:20,
        color:"blue",
        fontWeight:600,
        marginTop:40
    },
    imageorderdeliver:{
        flexDirection:"row",
        justifyContent:"space-between"
    }
})