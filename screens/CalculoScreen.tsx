import { StyleSheet, Text, View, Button, } from 'react-native'
import React, { useEffect, useState } from 'react'
import {  TextInput } from 'react-native-paper'

export default function CalculoScreen() {

    const [numero, setnumero] = useState('')
    const [lista, setlista] = useState([])

   useEffect(() => {
    if(numero == ''){
        setlista([])
    }
   }, [numero])
   
    
    //Multiplos de un número

    let multiplosLista: any =[]
    function multiplos(numeroTemp : number){
        for (let i=1; i<= numeroTemp; i++){
            if ( numeroTemp % i === 0 ){
                //console.log(i)
                multiplosLista.push(i)
            }
        }
        console.log(multiplosLista)
        setlista(multiplosLista)
    }

    

  return (
    <View style={styles.container}>
      <Text>CalculoScreen</Text>
      <TextInput 
      keyboardType='numeric'
      onChangeText={ (texto) =>( setnumero(texto)) }
      />
      <Text>{lista.join(', ')}</Text>
      <Button title='Calcular' onPress={ ()=> multiplos(+numero)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#c3f278',
        justifyContent:'center',
        alignItems:'center'
    }
})