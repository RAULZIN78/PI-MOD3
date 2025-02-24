import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    containerFeed: {
    
        flexDirection : 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop : 80,
        flex : 1, 
        backgroundColor : 'white'
    },

    scrollContent: {
        paddingBottom: 20, // Espaço extra na parte inferior
        paddingHorizontal: 15, // Espaçamento nas laterais
        paddingTop: 20, // Espaço extra na parte superior
        alignItems: 'center', // Centraliza os itens horizontalmente
    },

    containerTop : {

        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        width : '100%',
    },

    iconUser : {

        width : 45,
        height : 45,
        marginRight : 18,
        
    },

    titleLogo : {

        fontSize : 55, 
        marginRight : 120, 
        top : -24, 
        color : '#0270FF',
        fontFamily : 'Raleway_700Bold'

    },

    pesquisaFeed : {
        
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        borderWidth : 2,
        borderRadius: 10,
        width : '91%',
        fontSize : 20,
        fontFamily : 'Raleway_400Regular',
        backgroundColor : 'white',
        marginTop : 15,
        paddingLeft : 10
        
    },

    lupa : {
        position: 'absolute',
        right: 40,
        top: 133,
        width : 30,
    },

    modalBackground: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro, semi-transparente
    },

    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        position : 'absolute',
        top : 150
      },

      modalText: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold',
        fontFamily : 'Raleway_400Regular'
      },

      optionText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#007BFF',
        fontFamily : 'Raleway_400Regular'
      },

      cardUsuario : {
        
        flexDirection: 'column', // Alinha os itens em linha
        justifyContent: 'flex-start', // Coloca o texto à esquerda e o ícone à direita
        alignItems: 'flex-start', // Alinha os itens no centro verticalmente
        borderWidth: 2,
        borderRadius: 15,
        width: '90%',
        marginTop: 50,
        padding: 20,
        flexWrap: 'wrap'

      },

      textCard: {
        flexDirection: 'column', // Mantém o texto empilhado
        alignItems: 'flex-start', // Alinha os textos à esquerda
        fontSize : 20,
        fontFamily : 'Raleway_700Bold',
        marginTop : 20
        
    },

})

export default styles;