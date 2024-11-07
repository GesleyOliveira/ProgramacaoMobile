import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Cadastro"
          onPress={() => navigation.navigate("Cadastro")}
          color="#6200ee"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Consulta"
          onPress={() => navigation.navigate("Consulta")}
          color="#03dac6"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Atualização"
          onPress={() => navigation.navigate("Alteração")}
          color="#ff9800"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Exclusão"
          onPress={() => navigation.navigate("Apagar")}
          color="#f44336"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Fundo suave
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "80%", // Largura dos botões
    marginVertical: 10, // Espaçamento vertical entre os botões
    borderRadius: 8, // Bordas arredondadas
    overflow: "hidden", // Para aplicar bordas arredondadas
  },
});

export default HomeScreen;
