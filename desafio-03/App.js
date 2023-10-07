import { useState } from 'react'
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
// import { styles } from './styles'
//Deixei com o styles dentro da App.js pois ele não estava encontrando o arquivo style.js

export default function App() {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)

  const [resultado, setResultado] = useState(0)

  function calcular(){
    setResultado(first*second)
  }

   return(
    <View>

      <Text style={styles.title}>Multiplicador de números</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número: "
      onChangeText={setFirst}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o segundo número: "
      onChangeText={setSecond}
      />

      <Button title="Calcular" onPress={calcular} />


      <Text style={styles.resultado}>Resultado é: {resultado} </Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    input:{
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
      },
    resultado:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      margin: 15
    },

    title:{
      fontSize: 25,
      fontWeight: 'bolder',
      textAlign: 'center',
      margin: 5
    }

  });
