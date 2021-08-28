import React, { useState } from 'react';
import { StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Animated} from 'react-native';
  
const MainScreen=()=>{
    const [open,setOpen]=useState(false)
    const [selected,setSelected]=useState("")
    const [hovered,setHovered] = useState("")
    const images = [
        { id: "like", img: "http://i.imgur.com/LwCYmcM.gif" ,key:1},
        { id: "love", img: "http://i.imgur.com/k5jMsaH.gif",key:2 },
        { id: "haha", img: "http://i.imgur.com/f93vCxM.gif" ,key:3},
        { id: "yay", img: "http://i.imgur.com/a44ke8c.gif" ,key:4},
        { id: "wow", img: "http://i.imgur.com/9xTkN93.gif" ,key:5},
        { id: "sad", img: "http://i.imgur.com/tFOrN5d.gif" ,key:6},
        { id: "angry", img: "http://i.imgur.com/1MgcQg0.gif" ,key:7},
      ];
    

    return(
        <View style={styles.container}>
        <View style={styles.center} >
        <TouchableOpacity style={styles.likeBtn} onPress={()=>setOpen(true)}>
         <Image source={{uri:selected!==""?images[selected-1]?.img:images[0]?.img}} style={{height:20,width:20}}/>
          </TouchableOpacity>
           <Text>Your own Emojis, Select your mood</Text>
          <Animated.View
            style={[styles.likeContainer]}
          >
            <View  style={styles.imgContainer}>
                {
                     open? images.map((img) => 
                     <View key={img.key} onTouchStart={()=>setHovered(img?.id)}>
                     <TouchableOpacity 
                     key={img.key} onPress={()=>{setSelected(img?.key),setOpen(false),setHovered("")}}>
                     <Image source={{uri:img.img}}
                     style={[{
                     height:30,width:30,
                     transform: [{ scale:hovered == img.id? 1.5:0.85}],
                     marginHorizontal:hovered == img.id?15:2
                    }]}   
                    /> 
                    <Text style={styles.emojiText}>{img.id}</Text>
                    </TouchableOpacity>
                    </View>
                      )
                :null}
            </View>
          </Animated.View>
        </View>
      </View>
    );
    
}
var styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    center: {
      position: "absolute",
      left: 50,
      top: 300,
    },
    likeContainer: {
      position: "absolute",
      left: -10,
      top: -30,
      padding: 5,
      flex: 1,
      backgroundColor: "#FFF",
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 20,
    },
    imgContainer: {
      backgroundColor: "transparent",
      flexDirection: "row",
    },
    emojiText:{
        paddingTop:"2%",
        textAlign:"center"
    }
  });
export default MainScreen