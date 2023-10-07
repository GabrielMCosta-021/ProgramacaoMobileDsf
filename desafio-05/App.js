import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import { styles } from './styles'



export default function App(){
  const [resultado, setResultado] = useState()
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()

  function verificar(res){

    if(res < 18.5){
      setResultado('Abaixo do peso')

    } else if(res < 24.9){
      setResultado('Peso normal')

    } else if(res < 29.9){
      setResultado('Sobrepeso')

    } else if(res < 34.9){
      setResultado('Obesidade Grau 1')

    } else if(res < 39.9){
      setResultado('Obesidade Grau 2')

    } else if(res >= 40){
      setResultado('Obesidade Grau 3 ou Mórbita')

    }
  }

  return(
    <View>

      <Image 
       style={styles.logo}
       source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84-NqzQDjo6MH99ln2Vzjpum9eHcBKjw-bTcPWM6EXpxmpAEhzGUpvAMn6hOroBnnGIU&usqp=CAU'} /> 

      <Text style={styles.titulo}>Cálculo de IMC</Text>


      <TextInput
      style={styles.input}
      placeholder="Peso"
      onChangeText={setNumero1}
      />


      <TextInput
      style={styles.input}
      placeholder="Altura"
      onChangeText={setNumero2}
      />


      <Button title='Verificar' color='red' onPress={() => verificar(numero1 / (numero2 * numero2))}/>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}
