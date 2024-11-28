import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const DeleteScreen = () => {
  const [id, setId] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  // Função para carregar os usuários cadastrados
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get("http://10.68.152.206:3000/api/consulta");
        if (response.data && Array.isArray(response.data)) {
          setUsuarios(response.data);
        } else {
          console.error("Erro: Resposta inesperada da API", response.data);
        }
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleDelete = async () => {
    if (!id) {
      Alert.alert("Erro", "O campo ID é obrigatório.");
      return;
    }

    try {
      const response = await axios.delete(
        `http://10.68.152.206:3000/api/deletar/${id}`
      );
      Alert.alert("Sucesso", response.data.message);
      setId("");
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      Alert.alert("Erro", "Falha ao deletar usuário.");
    }
  };

  const handleSelectUsuario = (usuario) => {
    setId(usuario.id.toString()); // Definir o ID selecionado
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Deletar Usuário</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectUsuario(item)}>
            <View style={styles.userContainer}>
              <Text style={styles.userText}>ID: {item.id}</Text>
              <Text style={styles.userText}>Nome: {item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={<Text style={styles.listHeader}>Selecione um ID para deletar</Text>}
      />

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
  listContainer: {
    width: "100%",
    marginBottom: 20,
  },
  listHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  userContainer: {
    padding: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  userText: {
    fontSize: 16,
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
