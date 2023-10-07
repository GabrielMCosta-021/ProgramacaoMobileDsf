import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  titulo:{
    fontSize: 25,
    color:'purple',
    marginTop: 15,
    textAlign: 'center'
  },
  
  input:{
    height: 40,
    borderWidth: .5,
    borderColor: '#222',
    margin: 10,
    fontSize: 15,
    padding: 10,
  },

  resultado: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green'
  },

  logo: {
    witdh: 80,
    height: 200,
    margin: 20 
  }

})

export {styles}