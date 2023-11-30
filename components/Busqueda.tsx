import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function Busqueda( props: any) {
    //console.log(props.data)
    //Búsqueda de un elemento dentro de un arreglo
    const [numero, setnumero] = useState('')

    function buscar( numero:number, arreglo: any){
        let temp= false
        for( let digito of arreglo){
            if( digito === numero){
                //console.log("Existe")
                temp=true
                break;
            }
        }

        if( temp== true){
           // console.log('Si existe')
            Alert.alert("Mensaje", "Si existe")
        }else{
            console.log("No existe")
        }
    }



  return (
    <View>
      <Text>Busqueda</Text>
      <TextInput
        onChangeText={(texto)=>( setnumero(texto))}
      />
      <Button onPress={()=>buscar(+numero, props.data) }>BUSCAR</Button>
    </View>
  )
}

const styles = StyleSheet.create({})