import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import NovaTarefaScreen from './src/screens/NovaTarefaScreen';
import EditarTarefaScreen from './src/screens/EditarTarefaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Lista de Tarefas' }}
        />
        <Stack.Screen
          name="NovaTarefa"
          component={NovaTarefaScreen}
          options={{ title: 'Nova Tarefa' }}
        />
        <Stack.Screen
          name="EditarTarefa"
          component={EditarTarefaScreen}
          options={{ title: 'Editar Tarefa' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 