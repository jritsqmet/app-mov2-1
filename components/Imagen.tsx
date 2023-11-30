import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Imagen(props: any) {
 // console.log(props.data)
  return (
    <View>
      <View style={{flexDirection:'row-reverse'}}>
        <Text>{props.data.nombre}</Text>
        <Image
          source={{ uri: props.data.url }}
          style={styles.img1}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img1: {
    width: 400,
    height: 200
  }
});