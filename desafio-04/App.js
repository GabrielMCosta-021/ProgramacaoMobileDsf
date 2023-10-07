import { useState } from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'
import { styles } from './styles'



export default function App(){
  const [resultado, setResultado] = useState()
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()

  function verificar(res){
    if(res < 0.7){
      setResultado('Etanol \n é mais barato')
    } else{
      setResultado('Gasolina \n é mais barato')
    }
  }

  return(
    <View>

      <Text style={styles.titulo}>Álcool ou Gasolina</Text>
      
      <Image
        style={styles.logo}
        source={'https://wp-midia-nova.bidu.com.br/uploads/2017/01/05175045/%C3%A1lcool.png'}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o valor da gasolina"
      onChangeText={setNumero1}
      />


      <TextInput
      style={styles.input}
      placeholder="Digite o valor do etanol"
      onChangeText={setNumero2}
      />


      <Button title='Verificar' color='blue' onPress={() => verificar(numero1/numero2)}/>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}
