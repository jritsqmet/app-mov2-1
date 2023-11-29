import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Imagen() {
  return (
    <View>
      <Text>Imagen</Text>
      <Text>HOLA MUNDO !!!!!!!!!!!!!!!!</Text>
      <Image 
        source={{ uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/13526.jpg'}}
        style={styles.img1}  
      />
    </View>
  )
}


const styles = StyleSheet.create({
 img1:{
  width:400,
  height:200
 }
});