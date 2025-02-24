import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardPublicacao = ({ titulo, descricao, imagem, autor }) => {
  return (
    <View style={styles.card}>
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
      <View style={styles.cardContent}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.autor}>Publicado por: {autor}</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Curtir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  autor: {
    fontSize: 18,
    color: '#999',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CardPublicacao;
