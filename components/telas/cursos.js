import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Modal, Button } from 'react-native';
import styles from '../stylesCursos';
import { loggedUser } from '../../user';
import { useFonts, Raleway_400Regular, Raleway_700Bold } from '@expo-google-fonts/raleway';
import CardPublicacao from '../../cardPublicacao';
import { lista_usuarios } from '../../usuarios.js';

const user1 = lista_usuarios[0]["usuario"];
const user2 = lista_usuarios[1]["usuario"];

const publicacoes = [
    {
    titulo: 'Aprenda Desenvolvimento Web do Zero',
    descricao: 'Inicie sua jornada no mundo do desenvolvimento web com este curso abrangente. Aprenda HTML, CSS, JavaScript e mais, enquanto constrói projetos reais que ajudarão a consolidar seu aprendizado. Não é necessário experiência prévia, basta vontade de aprender!',
    imagem: null,
    autor: user1,
    },
    {
    titulo: 'Masterclass em Design de Interfaces',
    descricao: 'Transforme suas habilidades de design com este curso avançado de design de interfaces. Descubra as melhores práticas, ferramentas e técnicas para criar layouts incríveis e funcionais, desde wireframes até protótipos interativos. Ideal para quem já tem experiência com design gráfico e quer se aprofundar em design digital.',
    imagem: null, // Sem imagem
    autor: user2,
    },
];



const Cursos = () => { 

    console.log(loggedUser["usuario"])

    const [modalVisible, setModalVisible] = React.useState(false);
    const [titulo, setTitulo] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [publicacoesState, setPublicacoesState] = React.useState(publicacoes);

    const [fontLoaded] = useFonts ({

        Raleway_400Regular,
        Raleway_700Bold
    
      });
    
      if(!fontLoaded) {
    
        return <Text>Fonte sendo carregada...</Text>;
     }


      // Função para adicionar uma nova publicação
    const handleCreatePublication = () => {
        const newPublication = {
            titulo: titulo,
            descricao: descricao,
            imagem: null, // Pode adicionar uma imagem se desejar
            autor: loggedUser["usuario"], // Definir quem é o autor da publicação
        };

        // Adiciona a nova publicação à lista
        setPublicacoesState(prevPublicacoes => [newPublication, ...prevPublicacoes]);

        // Limpa os campos e fecha o modal
        setTitulo('');
        setDescricao('');
        setModalVisible(false);
    };

    return (

        <ScrollView contentContainerStyle={styles.scrollContent}>


            <View style={{alignItems : 'center' }}>
                <Text style={{fontSize : 80, fontFamily : 'Raleway_700Bold' ,marginTop : 20}}>Cursos</Text>
            </View>
            
            <View style={{marginTop : 30}}>
                {publicacoesState.map((pub, index) => (
                    <CardPublicacao
                    key={pub.titulo}
                    titulo={pub.titulo}
                    descricao={pub.descricao}
                    imagem={pub.imagem}
                    autor={pub.autor}
                    />
                ))}
            </View>

            {/* Botão Fixo */}
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: -90,
                    right: 30,
                    backgroundColor: '#007BFF',
                    padding: 20,
                    borderRadius: 50,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ color: '#fff', fontSize: 24 }}>+</Text>
            </TouchableOpacity>

            {/* Modal para Criar Publicação */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ width: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 10 }}>
                        <Text style={{ fontFamily: 'Raleway_700Bold', fontSize: 24 }}>Criar Publicação</Text>

                        <TextInput
                            style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 20, padding: 10 }}
                            placeholder="Título"
                            value={titulo}
                            onChangeText={setTitulo}
                        />

                        <TextInput
                            style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', marginTop: 20, padding: 10 }}
                            placeholder="Descrição"
                            value={descricao}
                            onChangeText={setDescricao}
                            multiline
                        />

                        <View style={{ marginTop: 20 }}>
                            <Button title="Criar Publicação" onPress={handleCreatePublication} />
                        </View>

                        <TouchableOpacity
                            style={{ marginTop: 10 }}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={{ color: '#007BFF', fontSize: 16 }}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
}

export default Cursos;