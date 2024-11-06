import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import axios from "axios";

const ConsultaScreen = () => {
  const [dados, setDados] = useState([]);

  const handleConsulta = async () => {
    try {
      const response = await axios.get("http://10.68.153.27:3000/api/consulta");
      setDados(response.data);
    } catch (error) {
      console.log(`Erro: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Usuário</Text>
      <Button title="Consultar" onPress={handleConsulta} color="#03dac6" />
      <FlatList
        data={dados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderUserData}
        contentContainerStyle={styles.resultContainer}
      />
    </View>
  );
};

const renderUserData = ({ item }) => {
  return (
    <View style={styles.userContainer}>
      <Text style={styles.userText}>Nome: {item.nome}</Text>
      <Text style={styles.userText}>Email: {item.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
  },
  userContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});

export default ConsultaScreen;
