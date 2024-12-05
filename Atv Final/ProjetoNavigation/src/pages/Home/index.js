import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const navegaDetalhes = () => {
    navigation.navigate("Detalhes");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Tela Home</Text>
      <TouchableOpacity style={styles.button} onPress={navegaDetalhes}>
        <Text style={styles.buttonText}>Ir para Detalhes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.buttonText}>Abrir Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F7FF",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00509E",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007ACC",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 4,
  },
  secondaryButton: {
    backgroundColor: "#FFA500",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
