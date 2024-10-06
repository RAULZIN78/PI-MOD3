import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
    container : {
  
      flex: 1,
      backgroundColor : '#6ac',
      alignItems : 'center',
      justifyContent : 'center',
    },
  
    logo :{
  
      backgroundColor : '#fff',
      alignItems : 'center',
      fontSize : 60,
      
    },  
  
    loginView : {
  
      flex: 0.8,
      backgroundColor : '#aaa',
      alignItems : 'center',
      justifyContent : 'center',
  
    },
  
    buttonView : {
        
      marginTop : 20,
      backgroundColor : '#0f0'
    },
  
    input : {
  
      borderWidth : 1,
      borderColor : 'black',
      padding : 8,
      margin : 15,
      width : 350,
      borderRadius : 5,
      fontSize : 20
    },

    cadastroView : {

        flex : 0.8,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#aaa',
        

    },
  
    button : {
  
      backgroundColor : '#08f',
      borderWidth : 1,
      borderColor : 'black',
      padding : 3,
      margin : 10,
      width : 350,
      alignItems : 'center',
      justifyContent : 'center',
      borderRadius : 5
    },
  
    buttonText : {
  
      fontSize : 20,
      color : 'white'
    },
  
    imageLogo : {
      
      top : 10,
      width : 200,
      height : 200,
      resizeMode: 'contain',
    
    }
    
  });


  export default styles;