import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


function HomeScreen({route}) {
const { username, idade } = route.params;
return (
<View style={{ flex: 1, alignItems: 'center'
, justifyContent: 'center' }}>
<Text>Bem-vindo, {username}!</Text>
<Text>Idade: {idade}</Text>
</View>
);
}

function LoginScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Login Screen</Text>
<Button title='Home' onPress={() => navigation.navigate('HomeScreen', { username: 'Nilson',idade: 30 })}>
  <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"/>
</Button>
</View>
);
}

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Login">
<Stack.Screen name="Home" component={HomeScreen}
options={{headerTitleAlign: 'center'
, }} />
<Stack.Screen name="Login" component={LoginScreen}
options={{ headerShown: false, 
  headerRight: () => (
    <Ionicons
    name="notifications-outline"
    size={24}
    color="black"
    style={{ marginRight: 10 }}
    />
  )
}} />
</Stack.Navigator>
</NavigationContainer>
);
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});