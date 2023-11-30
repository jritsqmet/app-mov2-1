import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Imagen from '../components/Imagen'

export default function Galeria() {
  const datos = [
    { nombre: 'Imagen1', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/9067.jpg' },
    { nombre: 'Imagen2', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/3087.jpg' },
    { nombre: 'Imagen3', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/331.jpg' },
    { nombre: 'Imagen4', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/9020.jpg' },
    { nombre: 'Imagen5', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/3611.jpg' },


  ]

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: 'white' }}>Galeria</Text>

      <View style={{ height: 600, backgroundColor:'white' }}>
        <FlatList
          data={datos}
          horizontal={false}
          renderItem={({ item }) => (
            <Imagen data={item} />
          )} 
           
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e79'
  }
})