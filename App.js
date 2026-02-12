import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#274360',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  label: {
    color: 'white',
    alignSelf: 'flex-start',
    marginLeft: -80,
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
  },

  input: {
    width: '300%',
    height: 45,
    backgroundColor: '#dcdcdc',
    borderRadius: 8,
    paddingHorizontal: 10,
  },

  botao: {
    width: '300%',
    height: 50,
    backgroundColor: '#3CB371',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  esqueceu: {
    color: 'white',
    marginTop: 15,
    textDecorationLine: 'underline',
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    Color:'white',
  },

  header: {
    width: '85%',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  content: {
    width: '100%',
    padding: 150,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    alignItems: 'center',
  },
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", senha);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.content}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTLo7PcZq1YtJNfZEobioBzdrK9YxMJ0PRA&s',
          }}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin}>
          <Text style={styles.textoBotao}>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastre-se</Text>
        </TouchableOpacity>

        <Text style={styles.esqueceu}>esqueceu a senha</Text>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const handleLogin = () => {
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text
          style={styles.h1}
          h1
        >
          Cadastro
        </Text>
        </View>

        <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

function esqueceu() {
  const [email, setEmail] = useState('');
  const handleLogin = () => {
    console.log("Email:", email);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.h1}>Esqueceu a senha</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            <Text style={styles.textoBotao}>Enviar</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

