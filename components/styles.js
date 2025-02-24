import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerLogin: {
    
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex : 1,
    
  },

  containerCadastro: {
    
    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex : 1, 
    top : 10
    
  },
  
  inputLoginView : {

    flexDirection : 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position : 'relative',
    top : 100
  },

  inputLogin : {

      fontSize : 20,
      borderWidth : 2,
      borderColor : 'black',
      width : 300,
      padding : 5,
      borderRadius : 10,
      fontFamily : 'Raleway_400Regular',
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },

  inputCadastro : {

    fontSize : 22,
    borderWidth : 2,
    borderColor : 'black',
    width : 350,
    padding : 5,
    marginBottom : 20,
    borderRadius : 10,
    fontFamily : 'Raleway_400Regular',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
},

  viewInputCadastro : {

    position : 'relative',
    top : -50
  },

  gradientLogin: {
    flex: 1, // Faz o gradiente ocupar toda a tela
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
  },

  gradientButton : {

    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    borderColor : 'black',
    borderRadius : 20,
    width : 200,
    padding : 2.5,
    marginBottom : 30

  },

  gradientButtonCadastro : {

    alignItems : 'center',
    justifyContent : 'center',
    borderWidth : 1,
    borderColor : 'black',
    borderRadius : 20,
    width : 250,
    padding : 2.5,
    marginBottom : 25,

  },

  buttonViewLogin : {
    
    top : 200,
    alignItems : 'center',
    justifyContent : 'center'

  },

  buttonViewCadastro : {
    
    alignItems : 'flex-end',
    justifyContent : 'flex-end',

  },

  feedTopView : {
  
    flexDirection : 'row',
    backgroundColor : 'green',
    alignItems : 'flex-start',
    justifyContent : 'center',
    flex : 1


  },

  textButtonLogin : {
    
    fontSize : 22,
    fontFamily : 'Raleway_400Regular'

  },

  textButtonCadastro : {
    
    fontSize : 25,
    fontFamily : 'Raleway_400Regular'
  },

  logoPortoLink : {

    width : 220,
    height : 220,
    
  },

  logoView : {

    flexDirection : 'row'
    
  },

  textoCadastro : {

    fontSize : 25,
    marginBottom : 10,
    fontFamily : 'Raleway_700Bold'

  },

  eyeIcon: {
    position: 'absolute',
    right: 8,
    top: '90%',
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },

  picker : {

    borderWidth : 2,
    borderColor : 'black',
    width : 350,
    padding : 5,
    marginBottom : 20,
    borderRadius : 10,
    fontFamily : 'Raleway_400Regular',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'

  }
  

  });


export default styles;