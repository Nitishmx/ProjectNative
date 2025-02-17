import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Message = () => {
    const messagedata=[{image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"},
        {image:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg",name:"Mukesh Sahani",orderno:"#677891566772",title:"Send perspiciatis unde omnis iste natus",sit:"sit voluptatem",timinh:"20 min ago"}
    ]
  return (
    <View>
              <View style={{flexDirection:"row",backgroundColor:"white",alignItems:"center",justifyContent:"center",gap:10,borderRadius:10,position:"relative",bottom:20,marginTop:26,shadowColor:"red", elevation:200}}>
                   <Image source={{uri:"https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-search-icon-png-image_924820.jpg"}} style={{width:30,height:30,marginLeft:10}}/>
                   <TextInput placeholder='Search for restaurant or dish' style={{fontSize:22,height:60,padding:8,opacity:0.6,width:320}}/>
              </View>
   <FlatList data={messagedata}
    renderItem={(item)=> <View>
        
        <View style={{borderWidth:1,marginHorizontal:16,padding:14,flexDirection:"row",gap:16,marginTop:10}}>
             
                 <Image source={{uri:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} style={{width:60,height:60,borderRadius:100}}/>
              
          <View>
              <Text style={{fontSize:20,fontWeight:600}}>Mukesh Sahani</Text>
              <Text style={{fontSize:16,opacity:0.4}}>Order ID: #677891566772</Text>
              <Text style={{fontSize:16,opacity:0.6}}>Send perspiciatis unde omnis iste natus</Text>
              <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:6}}>
                 <Text style={{fontSize:16,opacity:0.6}}>sit voluptatem</Text>
                 <Text style={{color:"blue"}}>20 min ago</Text>
              </View>
                  
              </View>
        </View>
    </View>}
   />
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})