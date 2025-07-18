import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import api from '../services/api';

export default function HomeScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      const response = await api.get('/tarefas');
      setTarefas(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as tarefas');
    }
  };

  const deletarTarefa = async (id) => {
    try {
      await api.delete(`/tarefas/${id}`);
      carregarTarefas();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível deletar a tarefa');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.tarefaItem}>
      <View style={styles.tarefaInfo}>
        <Text style={styles.tarefaTitulo}>{item.titulo}</Text>
        <Text style={styles.tarefaDescricao}>{item.descricao}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity
          style={[styles.botao, styles.botaoEditar]}
          onPress={() => navigation.navigate('EditarTarefa', { tarefa: item })}
        >
          <Text style={styles.botaoTexto}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, styles.botaoDeletar]}
          onPress={() => deletarTarefa(item.id)}
        >
          <Text style={styles.botaoTexto}>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() => navigation.navigate('NovaTarefa')}
      >
        <Text style={styles.botaoAdicionarTexto}>+ Nova Tarefa</Text>
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
  tarefaItem: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  tarefaInfo: {
    marginBottom: 8,
  },
  tarefaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tarefaDescricao: {
    fontSize: 14,
    color: '#666',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  botao: {
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  botaoEditar: {
    backgroundColor: '#2196F3',
  },
  botaoDeletar: {
    backgroundColor: '#f44336',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  botaoAdicionar: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 30,
    elevation: 4,
  },
  botaoAdicionarTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 