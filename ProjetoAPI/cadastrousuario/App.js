import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AtualizacaoScreen from './screen/AtualizacaoScreen';
import CadastroScreen from './screen/CadastroScreen';
import ConsultaScreen from './screen/ConsultaScreen';
import DeletaScreen from './screen/DeleteScreen';
import HomeScreen from './screen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Página Inicial" }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Consulta" component={ConsultaScreen} />
        <Stack.Screen name="Alteração" component={AtualizacaoScreen} />
        <Stack.Screen name="Apagar" component={DeletaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
