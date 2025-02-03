import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const Details = () => {
  const cardData=[
    {image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},
    {image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"Closed"}
    ,{image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},
    {image:"https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=2048x2048&w=is&k=20&c=-X87da9Xk-2bVMFvlb7rZ0V3QgHNd4bRgE4dLNfqV9E=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},
    {image:"https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"Closed"},
    {image:"https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},
    {image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"Closed"},
    {image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"Closed"},
    {image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},
    {image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"}]

  return (
    <View>
      <Image source={{uri:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{width:"100%", height:200,borderBottomLeftRadius:10,borderBottomRightRadius:10}}/>
      <View style={{marginTop:10,padding:8,backgroundColor:"#E6E6FA",borderRadius:10}}>
          <Text style={{color:"blue", fontWeight:600}}>Backyard Bowls</Text>
          <Text style={{opacity:0.6}}>Spring rolls are a popular Chinese snack of crispy rolls filled with a savary mixed vegetables stuffing. Hot handheld pockets of spiced veggies are wrapped and deep fried for and endlessly adaptable and delightfull dippable snack.</Text>
          <Text style={{fontSize:20,opacity:0.8,marginTop:4}}>Breakfast</Text>
          <Text style={{fontSize:18,color:"#008000",fontWeight:600}}>Opened</Text>
      </View>
      <View style={{marginTop:10}}>
          <Text style={{color:"blue",fontWeight:600,marginBottom:10,marginLeft:10}}>Food Categories</Text>
          <FlatList data={cardData}
            renderItem={({item})=>(
              <View style={{backgroundColor:"#E6E6FA",marginTop:10}}>
              <View style={{flexDirection:"row",gap:10,marginLeft:10}}>
                  <Image source={{uri:item.image}} style={{width:100,height:100,borderRadius:10}}/>
                  <View>
                      <Text style={{fontWeight:800}}>Mulberry Pizza by Josh</Text>
                      <Text>A dish made typically of flattened bread dough</Text>
                      <Text>spread with a savary mixture usually including </Text>
                      <Text>tomatoes and cheese and often</Text>
                      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                          <Text style={{color:"blue"}}>Calories : 266</Text>
                          <TouchableHighlight>
                             <Text style={{borderWidth:1,padding:4,marginRight:10,borderRadius:10,borderColor:"blue",color:"blue"}}>Remove</Text>
                          </TouchableHighlight>
                      </View>
                  </View>
              </View>
          </View>
            )}
          />
        
          
          

      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})