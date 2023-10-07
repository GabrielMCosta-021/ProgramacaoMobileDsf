import React, { Component } from 'react';
import { View, StyleSheet, ScrollView , Image , Text } from 'react-native';
import myImage from './assets/airjordan.jpg';
import myImage2 from './assets/tenisvans.jpg';
import myImage3 from './assets/tenisoakley.jpg';



function App(){
  return(
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={styles.box1}>
        
          <Image source = {myImage} style = {{width: 400 , height: 300}}/>
            <Text style ={{textAlign: 'center'}}>Tênis muito Top usado pelo meu pai.
            </ Text>
          <Text style = {{textAlign: 'center'}}>10.000,00 Reais</Text>

        </View>
        <View style={styles.box2}>
        
          <Image source = {myImage2} style = {{width: 400 , height: 300}}/>
          <Text style ={{textAlign: 'center'}}>Tênis Vans para pegar transporte
            alternativo.
            </ Text>
          <Text style = {{textAlign: 'center'}}>5.000,00 Reais</Text>

        </View>
        <View style={styles.box3}>
        
           <Image source = {myImage3} style = {{width: 400 , height: 300}}/>
            <Text style ={{textAlign: 'center'}}>Tênis da Oakley, esse é perigoso.
            </ Text>

            <Text style = {{textAlign: 'center'}}>30.000,00 Reais</Text>
        
        </View>
        
      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box1:{
    backgroundColor: 'light-grey',
    height: 500,
    width: 300,
  },
  box2:{
    backgroundColor: 'light-grey',
    height: 500,
    width: 300,
  },
  box3:{
    backgroundColor: 'light-grey',
    height: 500,
    width: 300,
  },
})




export default App;