import { Text, View, TextInput, Image, ImageBackground,TouchableOpacity, Linking } from 'react-native';
import { eteLogo, marcoZero, logoPL} from './images/img.js';
import * as React from 'react';
import styles from './components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from  '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feed from './components/telas/feed.js';
import Cursos from './components/telas/cursos.js';
import Forum from './components/telas/forum.js';
import Empregos from './components/telas/empregos.js';
import { Picker } from '@react-native-picker/picker';
import { setLoggedUser } from './user';
import { lista_usuarios } from './usuarios.js'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const LoginScreen = ({navigation}) => {

  console.log(lista_usuarios)

  const [usuario, setUsuario] = React.useState('Raul22');
  const [senha, setSenha] = React.useState('123456');
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  const validacaoLogin = () => { 

    let usuarioValido = null;

    for (let i = 0; i < lista_usuarios.length; i++)
    {
        if(usuario === lista_usuarios[i]["usuario"] && senha === lista_usuarios[i]["senha"])
        {
          usuarioValido = lista_usuarios[i];
          break;
        }
    }

    if(usuarioValido)
    {
      setLoggedUser(usuarioValido);
      navigation.navigate("FeedScreen");
    
    }else
    {
      console.log("Usuário ou senha incorretos!");
      window.alert("Usuario ou senha incorretos!");
    }
         
  };

  const [fontLoaded] = useFonts ({

    Raleway_400Regular,
    Raleway_700Bold

  });

  if(!fontLoaded) {

    return <Text>Carregando...</Text>;
  }


  return (

      <ImageBackground

        source={marcoZero}
        style ={{flex : 1, resizeMode : 'stretch', justifyContent : 'center', alignItems : 'center', width : 500, height : 1100}}

      >
        <View style={styles.containerLogin}>

          <View style={styles.logoView}>
            <Image

              source={logoPL}
              style={[styles.logoPortoLink, {position : 'relative', top : 50}]}
            >
            </Image>

            <Text style ={{position : 'relative', top :140,  fontFamily : 'Raleway_700Bold', fontSize : 40, marginRight : 15}}>PORTO LINK</Text>
          </View>

          <View style={styles.inputLoginView}>
            <Text style={{fontSize : 25, marginBottom : 20, fontFamily : 'Raleway_700Bold'}}>Usuario</Text>
            <TextInput

              numberOfLines={1}
              placeholder='Digite o usuário...'
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              value = {usuario}
              onChangeText = {setUsuario}
              style = {styles.inputLogin}

            />

            <Text style={{fontSize : 25, marginBottom : 20, marginTop : 20, fontFamily : 'Raleway_700Bold'}}>Senha</Text>
            <TextInput

              numberOfLines={1}
              placeholder='Digite a senha...'
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              value = {senha}
              onChangeText = {setSenha}
              style = {styles.inputLogin}
              secureTextEntry={!isPasswordVisible}

            />
            
            
            <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setPasswordVisible(!isPasswordVisible)}
              >
              <Icon 
                name={isPasswordVisible ? "visibility" : "visibility-off"} 
                size={26} 
                color="#000000" 
              />
            </TouchableOpacity>

          </View>

          <View style={styles.buttonViewLogin}>

              <TouchableOpacity onPress={validacaoLogin}>

                <LinearGradient

                colors={['#D3D3D3', '#A9A9A9', '#696969']}
                style={styles.gradientButton}
                >

                    <Text style={styles.textButtonLogin}>Login</Text>

                </LinearGradient>
              
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>

                <LinearGradient

                colors={['#D3D3D3', '#A9A9A9', '#696969']}
                style={styles.gradientButton}
                >

                  <Text style={styles.textButtonLogin}>Cadastro</Text>

                </LinearGradient>
                
              </TouchableOpacity> 

          </View>
          
          <Image
            source={eteLogo}
            style={{position : 'relative', bottom : -240, width : 290, height : 140, resizeMode : 'stretch'}}
          >
          </Image>

        </View>

      </ImageBackground>
  );
}


const CadastroScreen = ({navigation}) => {
  
  const [usuario, setUsuario] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [selectedValue, setSelectedValue] = React.useState("java");
  
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
        window.alert("Todos os campos devem ser preenchidos");

      }else if(!isAlphanumericWithSpecialChars(usuario) || !isEmailValid(email))
      {
        console.log("Usuario ou Email incorretos!!");
        window.alert("Usuario ou Email incorretos!!");
      
      }else if(!isNum(telefone) || (telefone.length < 11))
      {
        console.log("Número de telefone inválido!");
        window.alert("Número de telefone inválido!");
      
      }else if(senha.length < 6)
      {
        console.log("A senha deve ter no mínimo 6 caracteres...");
        window.alert("A senha deve ter no mínimo 6 caracteres...");
      
      }else
      {
        navigation.navigate("LoginScreen");
        lista_usuarios.push({"usuario" : usuario, "email" : email, "telefone" : telefone, "senha" : senha, "foto" : require('./images/user.png'), "linkedin" : "", "github" : "", "id": 3, "curso" :selectedValue});
        window.alert("Usuário cadastrado com sucesso!");
        console.log(lista_usuarios);
      }
    }
  }

  return (

    <ImageBackground

    source={marcoZero}
    style ={{flex : 1, resizeMode : 'stretch', justifyContent : 'center', alignItems : 'center', width : 500, height : 1100}}

    >
      <View style={styles.containerCadastro}>

        <View style={styles.logoView}>
          <Image

            source={logoPL}
            style={[styles.logoPortoLink, {position : 'relative', top : -40}]}
          >
          </Image>

            <Text style ={{position : 'relative', top :45,  fontFamily : 'Raleway_700Bold', fontSize : 40, marginRight : 15}}>PORTO LINK</Text>
        </View>

      <View style={styles.viewInputCadastro}>
        <Text style={styles.textoCadastro}>Usuario</Text>
        <TextInput style={styles.inputCadastro}
          placeholder="Usuario"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={usuario}
          onChangeText={setUsuario} />

        <Text style={styles.textoCadastro}>Email</Text>
        <TextInput style={styles.inputCadastro}
          placeholder="Email"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={email}
          onChangeText={setEmail} />

        <Text style={styles.textoCadastro}>Telefone</Text>
        <TextInput style={styles.inputCadastro}
          placeholder="Telefone"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={telefone}
          onChangeText={setTelefone} />

        <Text style={styles.textoCadastro}>Senha</Text>
        <TextInput style={styles.inputCadastro}
          placeholder="Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.3)"
          value={senha}
          onChangeText={setSenha} />

        <Text style={styles.textoCadastro}>Curso</Text>
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={styles.picker}
        >
          <Picker.Item label="Desenvolvimento de Sistemas" value="Desenvolvimento de Sistemas" />
          <Picker.Item label="Multimídia" value="Multimídia" />

        </Picker>

      </View>

        <View style={styles.buttonViewCadastro}>

          <TouchableOpacity onPress={validarCadastro}>

            <LinearGradient

              colors={['#D3D3D3', '#A9A9A9', '#696969']}
              style={styles.gradientButtonCadastro}
            >

              <Text style={styles.textButtonCadastro}>Cadastrar</Text>

            </LinearGradient>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>

            <LinearGradient

              colors={['#D3D3D3', '#A9A9A9', '#696969']}
              style={styles.gradientButtonCadastro}
            >

              <Text style={styles.textButtonCadastro}>Voltar</Text>

            </LinearGradient>

          </TouchableOpacity>

        </View>

      </View>

    </ImageBackground>
  );
};


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        
        headerShown: true,

        drawerLabelStyle : {

          fontSize : 18,
          fontWeight : 'bold'
        },

        drawerStyle : {
          backgroundColor : '#f4f4f4',
          width : 240
        }
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Feed} 
        options={{ drawerLabel: 'Home',
          drawerIcon: () => <Icon name="home" size={20} color="#000" />
         }}
      />
      <Drawer.Screen 
        name="Cursos" 
        component={Cursos}
        options={{ drawerLabel: 'Cursos', 
          drawerIcon: () => <Icon name="book" size={20} color="#000"/>
        }}
      />
      <Drawer.Screen 
        name="Empregos" 
        component={Empregos}
        options={{ drawerLabel: 'Empregos',
          drawerIcon: () => <Icon name="work" size={20} color="#000"/>
         }}
      />
      <Drawer.Screen 
        name="Forum" 
        component={Forum}
        options={{ drawerLabel: 'Forúm e Recados',
          drawerIcon: () => <Icon name="forum" size={20} color="#000"/>
         }}
      />
      <Drawer.Screen
        name="SIEPE"
        component={() => null} // Define como `null` já que não precisa renderizar uma tela
        options={{
          drawerLabel: 'Siepe',
          drawerIcon: () => <Icon name="link" size={20} color="#000" />,
          // Não é usado, mas necessário para estruturar o item no drawer
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); // Impede a navegação padrão
            Linking.openURL('https://www.siepe.educacao.pe.gov.br'); // Abre o link
          },
        }}
      />

      <Drawer.Screen
        name="CLASSROOM"
        component={() => null} // Define como `null` já que não precisa renderizar uma tela
        options={{
          drawerLabel: 'Classroom',
          drawerIcon: () => <Icon name="link" size={20} color="#000" />,
          // Não é usado, mas necessário para estruturar o item no drawer
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); // Impede a navegação padrão
            Linking.openURL('https://classroom.google.com/'); // Abre o link
          },
        }}
      />
      
      <Drawer.Screen
        name="DRIVE"
        component={() => null} // Define como `null` já que não precisa renderizar uma tela
        options={{
          drawerLabel: 'Drive',
          drawerIcon: () => <Icon name="link" size={20} color="#000" />,
          // Não é usado, mas necessário para estruturar o item no drawer
        }}
        listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); // Impede a navegação padrão
            Linking.openURL('https://drive.google.com/drive/home'); // Abre o link
          },
        }}
      />
        <Drawer.Screen
          name="Site ETE"
          component={() => null} // Define como `null` já que não precisa renderizar uma tela
          options={{
            drawerLabel: 'Site ETE',
            drawerIcon: () => <Icon name="link" size={20} color="#000" />,
            // Não é usado, mas necessário para estruturar o item no drawer
          }}
          listeners={{
            drawerItemPress: (e) => {
              e.preventDefault(); // Impede a navegação padrão
              Linking.openURL('https://sites.google.com/view/site-ete-porto-digital/p%C3%A1gina-inicial'); // Abre o link
            },
          }}
        />

    </Drawer.Navigator>
  );
};

export {lista_usuarios};

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
          component={DrawerNavigation}
          options={{headerShown : false}} 
        />

      </Stack.Navigator>

    </NavigationContainer>

  );


}




