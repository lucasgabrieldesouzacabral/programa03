import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <TextInput style={styles.input} placeholder="login" />
      <TextInput style={styles.input} placeholder="senha" />

      <Button title="Login" onPress={() => {}} />
      <Button title="Cadastre-se" onPress={() => {}} />
    </View>
  );
}

function ListaContatosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LISTA DE CONTATOS</Text>
      <Button title="Lista de Contatos" onPress={() => {}} />
      <Button title="Contato (Novo)" onPress={() => {}} />
    </View>
  );
}

function CadastroUsuarioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE USUÁRIOS</Text>

      <TextInput style={styles.input} placeholder="nome" />
      <TextInput style={styles.input} placeholder="cpf" />
      <TextInput style={styles.input} placeholder="email" />
      <TextInput style={styles.input} placeholder="senha" />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}

function CadastroContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE CONTATO</Text>

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Telefone" />

      <Button title="Salvar" onPress={() => {}} />
    </View>
  );
}

function DetalheContatoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ALTERAÇÃO / EXCLUSÃO DE CONTATO</Text>

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Telefone" />

      <Button title="Alterar" onPress={() => {}} />
      <Button title="Excluir" onPress={() => {}} />
    </View>
  );
}

// ----- APLICAÇÃO / ROTAS -----

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="ListaContatos"
          component={ListaContatosScreen}
          options={{ title: 'Lista de Contatos' }}
        />
        <Stack.Screen
          name="CadastroUsuario"
          component={CadastroUsuarioScreen}
          options={{ title: 'Usuário' }}
        />
        <Stack.Screen
          name="CadastroContato"
          component={CadastroContatoScreen}
          options={{ title: 'Contato' }}
        />
        <Stack.Screen
          name="DetalheContato"
          component={DetalheContatoScreen}
          options={{ title: 'Contato' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// ----- ESTILOS BÁSICOS -----

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});