import {
  ImageBackground,
  ImageBackgroundComponent,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

const Welcome = (props) => {
  return (
    <View>
      <ImageBackground
        source={{
          uri: 'https://media.istockphoto.com/id/839422436/photo/business-man-showing-online-shopping-concept-in-color-background.webp?s=2048x2048&w=is&k=20&c=FKZ4nvWqet4oqy6CozJT5FPQoyt3f7QXiDoVjhFJ8Lw=',
        }}
        style={{width: '100%', height: '100%'}}
      />
      <View style={styles.maincontainer}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.textstyle}>Join our Community of orders and</Text>
          <Text style={styles.textstyle}>Udliveres</Text>
          <TouchableHighlight>
             <Text style={styles.buttonstyle} onPress={()=>props.navigation.navigate("university")}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  maincontainer: {
    position: 'absolute',
    bottom:0,
    width:"100%"
   

  },
  content:{
    // backgroundColor:"red",
    alignItems:"center",
    marginBottom:100,
    gap:4
    
   
  },
  welcome:{
    fontSize:40,
    color:"white"
  },
  textstyle:{
    fontSize:22,
    color:"white",
    fontWeight:600
  },
  buttonstyle:{
    backgroundColor:"white",
    width:80,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:6,
    fontSize:20,
    fontWeight:800,
    color:"blue",
    cursor:"pointer"
  }

});
