import { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

function App() {
  const [resultado, setResultado] = useState()
  const [numero, setNumero] = useState()

  function verificar(num){
      let misterio = Math.floor(Math.random() * 11)

      if(num === misterio){
        setResultado('Parabéns você acertou')
      }else{
        setResultado('Não foi desta vez. O número era '+ misterio)
      }
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Jogo do Nº Aleatório</Text>

      <Image 
      style={styles.logo}
      source={'https://pm1.aminoapps.com/6428/9374e40c049b6422303c910ae45068f6d717fff5_00.jpg'} /> 

      <Text style={styles.text}> Pense em um número de 0 a 10: </Text>
      
       <TextInput
      style={styles.input}
      placeholder="Digite aqui o número"
      onChangeText={setNumero}
      />

      <Button title='Descobrir' color='lightgreen' onPress={() => verificar(numero)}/>

      <Text style={styles.resultado}> {resultado} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'purple'
  },

  logo: {
    width: 250,
    height: 200,
    alignSelf: 'center'
  }, 

  text:{
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  input:{
    height: 40,
    borderWidth: .5,
    borderColor: '#222',
    margin: 10,
    fontSize: 15,
    padding: 10,
    color: 'red'
  },

  resultado:{
    color: 'red',
    fontSize: 20,
    fontWeight: 'bolder',
    margin: 5
  },

  view:{
    backgroundColor: 'black',
  }

});

export default App