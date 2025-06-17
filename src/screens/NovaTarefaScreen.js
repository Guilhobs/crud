import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import api from '../services/api';

export default function NovaTarefaScreen({ navigation }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const salvarTarefa = async () => {
    if (!titulo.trim()) {
      Alert.alert('Erro', 'O título é obrigatório');
      return;
    }

    try {
      await api.post('/tarefas', {
        titulo,
        descricao,
        concluida: false,
      });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a tarefa');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Digite o título da tarefa"
      />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.inputDescricao]}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição da tarefa"
        multiline
      />

      <TouchableOpacity style={styles.botao} onPress={salvarTarefa}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputDescricao: {
    height: 100,
    textAlignVertical: 'top',
  },
  botao: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 