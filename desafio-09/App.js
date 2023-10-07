import React, { Component, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';




function App(){

  

  let initial_feed = [
        {id: 1, vaga: 'Desenvolvedor BackEnd', salario: 3200, 
        descricao: 'Vaga BackEnd top'
        ,contato: 'back3nd@gmail.com'},
        {id: 2, vaga: 'Engenheiro de Dados', salario: 10000,  
        descricao: 'Vaga de Engenharia massa'
         , contato: 'uber@gmail.com'},
        {id: 3, vaga: 'Suporte em TI', salario: 3200,  descricao: 'Perigoso'
        , contato: 'Sup@gmail.com'},
      ]


  const [feed, setFeed] = useState(initial_feed)

  function Vaga(props){
  return(
      <View style={styles.areaVaga}>
        <Text style={styles.textoVaga}> Vaga: {props.data.vaga} </Text>
        <Text style={styles.textoVaga}> Salario: {props.data.salario} </Text>
        <Text style={styles.textoVaga}> Descrição de vaga: {props.data.descricao}
        </Text>
        <Text style={styles.textoVaga}> Contato: {props.data.contato} </Text>
      </View>
  );
}


  return(
    <View style={styles.container}>
      <FlatList
      data={feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Vaga data={item}/>}
      />
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1 
    
  },
  areaVaga:{
    backgroundColor: '#ADD8E6',
    height: 200,
    marginBottom: 15
  },
  textoVaga:{
    color: '#000000',
    fontSize: 20,
    paddingVertical: 5
  },

})




export default App;





