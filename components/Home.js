import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const Home = (props) => {
  return (
   <View style={styles.container}>
       <View style={styles.pagestyle}>
       <View style={styles.imagestyle}>      
            <Image source={{uri:"https://img.freepik.com/premium-vector/isolated-home-vector-illustration_1076263-25.jpg?w=826"}} style={{width:180, height:180,borderRadius:100}}/>
        </View>
      <View style={styles.textsyling}>
      <Text style={styles.step}>Step1 of 3</Text>
      <View style={styles.findIcon}>
        <Text style={styles.find}>Find your university</Text>
        <Text style={styles.icon}> > </Text>
      </View>
      <Text style={styles.border}></Text>
      <Text style={styles.textby}>By continuing you accept our Terms & Conditions and</Text>
      <Text style={styles.textby}>Privacy Policy</Text>
      <TouchableHighlight>
         <Text style={styles.buttonstyling} onPress={()=>props.navigation.navigate("delivery")}>Continue</Text>
      </TouchableHighlight>
      <Text style={styles.footer}>Already have an account? Login</Text>
      </View>
    </View>
   </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#009EEB",
        width:"100%",
        height:"100%",
      
    },
    pagestyle:{
        position:"absolute",
        top:160,
        width:"100%"
        
        
    },
    imagestyle:{
        alignItems:"center",
       
        
    },
    textsyling:{
        marginLeft:40,
        marginTop:60
    },
    step:{
        color:"white",
        fontSize:20,
        fontWeight:600,
        marginBottom:30
    },
    findIcon:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    icon:{
        marginRight:40,
        fontSize:24,
        color:"white"
    },
    find:{
        color:"white",
        fontSize:20,
        fontWeight:600,
    
    },
    border:{
        color:"white",
        borderBottomWidth:1,
        borderColor:"white",
        width:340,
        marginBottom:20
    },
    textby:{
        color:"white",
        marginBottom:6,
        fontSize:15,
        fontWeight:600
    },
    buttonstyling:{
        backgroundColor:"white",
        width:340,
        height:48,
        textAlign:"center",
        textAlignVertical:"center",
        fontSize:20,
        borderRadius:6,
        marginTop:40,
        color:"blue"
    },
    footer:{
        position:"absolute",
        top:400,
        textAlign:"center",
        width:"94%",
        fontSize:20,
        color:"white",
        fontWeight:600
    }
})