import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditarTarefaScreen from './screen/EditarTarefaScreen';
import NovaTarefaScreen from './screen/NovaTarefaScreen';
import HomeScreen from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Página Inicial" }} />
        <Stack.Screen name="Cadastro" component={NovaTarefaScreen} />
        <Stack.Screen name="Alteração" component={EditarTarefaScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
