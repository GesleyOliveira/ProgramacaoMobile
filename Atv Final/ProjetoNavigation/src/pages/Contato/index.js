import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Contato = () => {
  const handlePress = () => {
    console.log("Botão de contato pressionado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Página de Contato</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Clique aqui para entrar em contato</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contato;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});


