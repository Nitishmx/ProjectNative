import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Delaware = () => {
    const cardData=[{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"Closed"},{image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1050109420/photo/bedmi-poori-daal-kachori.jpg?s=2048x2048&w=is&k=20&c=-X87da9Xk-2bVMFvlb7rZ0V3QgHNd4bRgE4dLNfqV9E=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"}]
    const secondCard=[{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"},{image:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM=",title:"Backyard Bowls",eatingtime:"Breakfast",time:"opended"}]
  return (
    <View>
         <Image source={{uri:"https://images.unsplash.com/photo-1618644195280-44360cfd6f69?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{width:"100%",height:300,borderBottomLeftRadius:10,borderBottomRightRadius:10}}/>
      <View style={{position:"absolute",width:"100%",alignItems:"center",top:80,gap:20}}>
         <Image source={{uri:"https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"}} style={{width:100,height:100,width:"284",height:60,position:"relative",bottom:32}}/>
         <Text style={{textAlign:"center",color:"white",fontSize:24,fontWeight:600,position:"relative",bottom:20}}>Discover the best food & drinks in Lucknow</Text>
         <View style={{flexDirection:"row",backgroundColor:"white",alignItems:"center",justifyContent:"center",gap:10,borderRadius:10,position:"relative",bottom:20}}>
             <Image source={{uri:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg"}} style={{width:30,height:30,marginLeft:10}}/>
             <TextInput placeholder='Search for restaurant or dish' style={{fontSize:22,height:60,padding:8,opacity:0.6}}/>
         </View>
      </View>
      {/* card of dining halls */}
      <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:14, marginTop:20}}>
         <Text>Dining Halls</Text>
         <Text style={{color:"blue",fontWeight:600}}>View all</Text>
      </View>
     <FlatList data={cardData}
     horizontal={true}
        renderItem={({item})=>{
            return<View style={{backgroundColor:"#FFEFD5", width:140,height:190,borderRadius:10,borderWidth:1,marginTop:20,marginLeft:20}}>
        <Image source={{uri:item.image}} style={{width:"100%",height:120,borderRadius:8}}/>
        <Text style={{marginLeft:10,marginTop:4}}>{item.title}</Text>
        <Text style={{marginLeft:10,opacity:0.8}}>{item.eatingtime}</Text>
        <Text style={{color:"#008000",marginLeft:10}}>{item.time}</Text>
      </View>
        }}
     />
     <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:14, marginTop:20}}>
         <Text>Dining Facilities</Text>
         <Text style={{color:"blue",fontWeight:600}}>View all</Text>
      </View>
     {/* second card */}
     <FlatList data={cardData}
     horizontal={true}
        renderItem={(item)=>{
            return  <View style={{backgroundColor:"#FFEFD5", width:140,height:190,borderRadius:10,borderWidth:1,marginTop:20,marginLeft:20}}>
        <Image source={{uri:"https://media.istockphoto.com/id/1024585168/photo/paneer-butter-masala-also-known-as-panir-makhani-or-makhanwala-served-in-a-ceramic-or-wooden.jpg?s=2048x2048&w=is&k=20&c=EjaXfIPT8khAhGAO8qcmWNxbBD91XWD-swN_wk2mcOM="}} style={{width:"100%",height:120,borderRadius:8}}/>
        <Text style={{marginLeft:10,marginTop:4}}>Backyard Bowls</Text>
        <Text style={{marginLeft:10,opacity:0.8}}>Breakfast</Text>
        <Text style={{color:"#008000",marginLeft:10}}>Opened</Text>
      </View>
        }}
     />
    </View>
  )
}

export default Delaware

const styles = StyleSheet.create({})