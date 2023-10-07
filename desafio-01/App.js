import React from 'react';
import { View, Text, Image } from 'react-native';


function App(){
    let nome = 'Jão da Silva';
    let img = 'https://avatars.githubusercontent.com/u/54562922?v=4';


  return(
     <View style= {{ margin: 33 }}>

        <Image
          source={{ uri: img }}
          style={{ width: 150, height: 150, alignSelf: 'center'}}
        />

        <Text style={{ marginTop: 10, fontSize: 20, fontWeight: 'Bold' }}>Dados Pessoais:</Text>
        <Text>Morador da baixada santista, atualmente atende ao WhatsApp</Text>

        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'Bold' }}>Formação:</Text>
        <Text>Formado pela Fatec PG.</Text>

        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'Bold' }}>Experiência:</Text>
        <Text>Trabalhou como estagiário na prefeitura municipal.</Text>

        <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'Bold' }}>Projetos:</Text>
        <Text>Desenvolvi diversas aplicações mobile com um professor perigoso na arte do React Native.</Text>

      </View>
  )
}

export default App;