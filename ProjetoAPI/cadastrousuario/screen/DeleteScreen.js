import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

const DeleteScreen = () => {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    if (!id) {
      Alert.alert("Erro", "O campo ID é obrigatório.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://10.68.152.124:3000/api/deletar/${id}`
      );
      Alert.alert("Sucesso", response.data.message);
      setId("");
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      Alert.alert("Erro", "Falha ao deletar usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Deletar Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="ID do Usuário"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />

      <Button title="Deletar Usuário" onPress={handleDelete} color="#6200ee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#dddddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
});

export default DeleteScreen;
