import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Modal, Button, ScrollView, Alert } from 'react-native';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesFeed';
import { lista_usuarios } from '../../usuarios.js';
import { loggedUser } from '../../user';




const UserMenuModal = ({ visible, onClose}) => {

    return (

        <Modal
            visible = {visible}
            animationType='fade'
            transparent={true}
            onRequestClose={onClose}
        >

            <View style={styles.modalBackground}>

                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Opções de Usuário</Text>
                    <TouchableOpacity onPress={() => { /* Ação de deslogar */ onClose(); }}>
                        <Text style={styles.optionText}>Deslogar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { /* Navegar para o Perfil */ onClose(); }}>
                        <Text style={styles.optionText}>Ir para Perfil</Text>
                     </TouchableOpacity>
                     <Button title="Fechar" onPress={onClose} />
                </View>

            </View>

        </Modal>
    );
};


const Feed = () => { 

    const [modalVisible, setModalVisible] = React.useState(false);

    const UserImage = lista_usuarios[0]["foto"];

    /*Alert.alert(
        'Bem-vindo!',
        `${loggedUser.usuario}`,
        [{ text: 'OK' }]
    );*/

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const [fontLoaded] = useFonts ({

        Raleway_400Regular,
        Raleway_700Bold
    
      });
    
      if(!fontLoaded) {
    
        return <Text>Fonte sendo carregada...</Text>;
    }

    console.log(lista_usuarios[0]["foto"]);

    return (

        <ScrollView contentContainerStyle={styles.scrollContent}>

            <View style={styles.containerTop}>
                <Text style={styles.titleLogo}>Porto Link</Text>
                <TouchableOpacity onPress={toggleModal}>
                <Image 
                source={require('../../images/user.png')}
                style={styles.iconUser}
                />
                </TouchableOpacity>
            </View>

            <UserMenuModal visible={modalVisible} onClose={toggleModal} />

            <TextInput style={styles.pesquisaFeed}></TextInput>

            <TouchableOpacity style ={styles.lupa}>
                <Icon name="search" size={30} color="#000"/>
            </TouchableOpacity>


            {lista_usuarios.map(user => (
                <TouchableOpacity key={user.id} style={styles.cardUsuario}>
                    <Image 
                        source={user.foto}
                        style={[styles.iconUser, {width: 80, height: 80, marginTop: 20, borderRadius : 50}]}
                    />

                <Text style={styles.textCard}>{user.usuario}</Text>
                <Text style={styles.textCard}>{user.curso}</Text>

                </TouchableOpacity>
            ))}
            
            

        </ScrollView>
    );
}

export default Feed;
