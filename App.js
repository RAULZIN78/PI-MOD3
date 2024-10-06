import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import logo from './imgs/eteLogo.png';
import { NavigationContainer } from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './components/styles';

const Stack = createNativeStackNavigator();

let lista_usuarios = [

  {"usuario" : "Raul22",
    "senha" : "123456",
    "email" : "raul@gmail.com",
    "telefone" : "81933332222"
  },

  {"usuario" : "Mirelli55",
    "senha" : "543210",
    "email" : "mirelli@gmail.com",
    "telefone" : "81944445555"
  },

  {"usuario" : "Emanuel33",
    "senha" : "13571113",
    "email" : "emanuel@gmail.com",
    "telefone" : "81966667777"
  }
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const LoginScreen = ({navigation}) => {

  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const validacaoLogin = () => { 

    let usuarioValido = false;

    for (let i = 0; i < lista_usuarios.length; i++)
    {
        if(usuario === lista_usuarios[i]["usuario"] && senha === lista_usuarios[i]["senha"])
        {
          usuarioValido = true;
          break;
        }
    }

    if(usuarioValido)
    {
      navigation.navigate("FeedScreen");
    
    }else
    {
      console.log("Usuário ou senha incorretos!");
      Alert.alert("Usuario ou senha incorretos!");
      window.alert("Usuario ou senha incorretos!");
    }
         
  }

  return (

    <View style={styles.container}>
      
      <StatusBar style="auto"/>

      <Text style ={styles.logo}>Login</Text>

      <View id='login' style={styles.loginView}>

        <TextInput

          numberOfLines={1}
          style = {styles.input}
          placeholder='Usuário'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value = {usuario}
          onChangeText = {setUsuario}
          
        />

        <TextInput

          keyboardType='default'
          style = {styles.input}
          placeholder='Senha'
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          secureTextEntry={true} // Para esconder a senha
          value = {senha}
          onChangeText = {setSenha}
        />

        

        <View style={styles.buttonView}>

          <TouchableOpacity style={styles.button} onPress={validacaoLogin}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroScreen')}>
            <Text style={styles.buttonText}>
              Criar conta
            </Text>
          </TouchableOpacity>

        </View>


        <View id='Imag'>

          <Image source={logo} style={styles.imageLogo}></Image>

        </View>

      </View>

    </View>
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const CadastroScreen = ({navigation}) => {
  
  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  
  function isAlphanumericWithSpecialChars(str) {
    
    return /^[a-zA-Z0-9]*$/.test(str);
  }

  function isEmailValid(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isNum(num) {
    
    return /^[0-9]*$/.test(num);
  }

  const validarCadastro = () => {

    let cadastroValido = false;
    let emailCadastrado = false;
    let usuarioCadastrado = false;

    for (let i = 0; i < lista_usuarios.length; i++)
    {
        if(usuario === lista_usuarios[i]["usuario"])
        {
          
          usuarioCadastrado = true;
        }

        if(email === lista_usuarios[i]["email"])
        {
          emailCadastrado = true;
        }
    }

    
    if(usuarioCadastrado)
    {
      console.log("Usuário já cadastrado!!");
      Alert.alert("Usuário já cadastrado!!");
      window.alert("Usuário já cadastrado!!");
      return

    }else if(emailCadastrado)
    {
      console.log("E-mail já cadastrado!!");
      Alert.alert("E-mail já cadastrado!!");
      window.alert("E-mail já cadastrado!!");
      return
    
    }else
    {
      
      if((usuario === "" || usuario === " ") || (senha === "" || senha === " ") || (email === "" || email === " ") || (telefone === "" || telefone === " "))
      {
        console.log("Todos os campos devem ser preenchidos");
        Alert.alert("Todos os campos devem ser preenchidos");
        window.alert("Todos os campos devem ser preenchidos");

      }else if(!isAlphanumericWithSpecialChars(usuario) || !isEmailValid(email))
      {
        console.log("Usuario ou Email incorretos!!");
        Alert.alert("Usuario ou Email incorretos!!");
        window.alert("Usuario ou Email incorretos!!");
      
      }else if(!isNum(telefone) || (telefone.length < 11))
      {
        console.log("Número de telefone inválido!");
        Alert.alert("Número de telefone inválido!");
        window.alert("Número de telefone inválido!");
      
      }else if(senha.length < 6)
      {
        console.log("A senha deve ter no mínimo 6 caracteres...");
        Alert.alert("A senha deve ter no mínimo 6 caracteres...");
        window.alert("A senha deve ter no mínimo 6 caracteres...");
      
      }else
      {
        navigation.navigate("LoginScreen");
        lista_usuarios.push({"usuario" : usuario, "email" : email, "telefone" : telefone, "senha" : senha});
        Alert.alert("Usuário cadastrado com sucesso!");
        window.alert("Usuário cadastrado com sucesso!");
        console.log(lista_usuarios);
      }
    }
  }

  /*const cadastroDebug = () => {

    console.log(`Usuario : ${usuario}\nSenha : ${senha}\nE-mail : ${email}\nTelefone : ${telefone}`);

  };*/

  return (

    <View style={styles.container}>

      <StatusBar style="auto"/>

      <Text style={styles.logo}>Cadastro</Text>
      
      <View style={styles.cadastroView}>

      
        <TextInput style={styles.input} 
          placeholder="Usuario" 
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value = {usuario}
          onChangeText = {setUsuario} 
        />

        <TextInput style={styles.input} 
          placeholder="Email" 
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value = {email}
          onChangeText = {setEmail} 
        />
        
        <TextInput style={styles.input} 
          placeholder="Telefone" 
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value = {telefone}
          onChangeText = {setTelefone} 
        />

        <TextInput style={styles.input} 
          placeholder="Senha" 
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value = {senha}
          onChangeText = {setSenha} 
        />

        <View style={styles.buttonView}>

          <TouchableOpacity style={styles.button} onPress={validarCadastro}>

            <Text style={styles.buttonText}>Cadastrar</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>

            <Text style={styles.buttonText}>Voltar</Text>

          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FeedScreen = ({navigation}) =>{

  return(

    <View style={styles.container}>

      <Text>dasdasd</Text>

    </View>

  );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="LoginScreen">

        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{headerShown : false}}
        />

        <Stack.Screen 
          name="CadastroScreen" 
          component={CadastroScreen}
          options={{headerShown : false}} 
        />

        <Stack.Screen

          name="FeedScreen"
          component={FeedScreen}
          options={{headerShown : false}} 
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
