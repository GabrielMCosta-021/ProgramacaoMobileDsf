import React , { Component, useState } from 'react';
import {View , Text , TextInput , Switch , Button, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function App (){

  const [texts, setTexts] = useState()
  const [nome, setNome] = useState('')
  const [idade , setIdade] = useState('')
  const [valor ,  setValor] = useState(0)
  const [status , setStatus] = useState(false)


  let initial_sexo = [
      {id: 1, nome: 'Masculino'},
      {id: 2, nome: 'Feminino'},
    ]

  let initial_escolaridade = [
      {id: 1, nome: 'Fundamental'},
      {id: 2, nome: 'Ensino Médio'},
      {id: 3, nome: 'Ensino Técnico'},
      {id: 4, nome: 'Ensino Superior'},
    ]


  const [sexo, setSexo] = useState(0)
  const [sexos, setSexos] = useState(initial_sexo)

  const [escol, setEscol] = useState(0)
  const [escols, setEscols] = useState(initial_escolaridade)

  let sexoItem = sexos.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
  })

  let escolaItem = escols.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.id} label={valor.nome} />
  })

  
function Confirmar(){

  setTexts(
    <View>

      <Text style={styles.titleText}>Dados Informados</Text>

       <Text style={styles.resultadoText}>Nome: {nome}</Text>
       <Text style={styles.resultadoText}>Idade: {idade}</Text>
       <Text style={styles.resultadoText}>Sexo: {sexos[sexo].nome}</Text>
       <Text style={styles.resultadoText}>Escolaridade: {escols[escol].nome}</Text>
       <Text style={styles.resultadoText}>Limite: {valor.toFixed(0)}</Text>
       <Text style={styles.resultadoText}>Brasileiro: {(status) ? "Sim" : "Não"} </Text>
    </View>
  )

}

  return(

      <View>
        <Text style={styles.title}>Abertura de Conta</Text>

        <Text style={styles.inputText}> Nome:
          <TextInput placeholder=' Digite seu nome.' onChangeText = {setNome}>
          </TextInput>
        </Text>

        <Text style={styles.inputText}> Idade:
          <TextInput placeholder=' Digite sua idade.' onChangeText = {setIdade}>
          </TextInput>
        </Text>

        <Text style={styles.inputText}>Sexo: 
          <Picker
            selectedValue={sexo+1}
            onValueChange={ (itemValue, itemIndex) => setSexo(itemIndex) }>

              {sexoItem}

          </Picker>
        </Text>

        <Text style={styles.inputText}>Escolaridade: 
          <Picker
            selectedValue={escol+1}
            onValueChange={ (itemValue, itemIndex) => setEscol(itemIndex) }>

              {escolaItem}

          </Picker>
        </Text>

        <Text style={styles.inputText}> Limite:
          <Slider
              minimumValue={0}
              maximumValue={1000}
              onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
              value={valor}
              step={1}
              minimumTrackTintColor='blue'
              maximumTrackTintColor='green'
              thumbTintColor='orange'
          />
        </Text>

        <Text style={{textAlign: 'center', fontSize: 20}}>
        {valor.toFixed(0)}
      </Text>

      <Text style={styles.inputText}>Brasileiro:
        <Switch value = {status} onValueChange = {(valorSwitch) =>
          setStatus(valorSwitch)}/>
      </Text>

      <Button title="Confirmar" onPress={() => Confirmar()}/>

      <Text> {texts} </Text>

      </View>

  )

}

const styles = StyleSheet.create({
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    },

    inputText:{
      fontSize: 15,
      margin: 5
    },

    resultadoText:{
      fontSize: 15,
      margin: 5,
    },

    titleText:{
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    }
})

export default App;