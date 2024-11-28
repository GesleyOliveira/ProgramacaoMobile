import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const AtualizacaoScreen = () => {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  // Função para carregar os IDs dos usuários disponíveis
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

  const handleAtualizacao = async () => {
    if (!id || !nome || !email || !senha) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await axios.put(
        `http://10.68.152.206:3000/api/atualizacao/${id}`,
        { nome, email, senha }
      );
      Alert.alert("Sucesso", "Usuário atualizado com sucesso!");
      console.log(response.data);
      setId("");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      Alert.alert("Erro", "Falha ao atualizar usuário.", error);
    }
  };

  const handleSelectUsuario = (usuario) => {
    setId(usuario.id);
    setNome(usuario.nome || "");
    setEmail(usuario.email || "");
    setSenha(""); // Opcionalmente, você pode manter a senha em branco para obrigar o usuário a redefinir
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualização de Usuário</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectUsuario(item)}>
            <View style={styles.userContainer}>
              <Text style={styles.userText}>ID: {item.id}</Text>
              <Text style={styles.userText}>Nome: {item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={<Text style={styles.listHeader}>Selecione um ID para atualizar</Text>}
      />

      <TextInput
        style={styles.input}
        placeholder="ID do Usuário"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button
        title="Atualizar Usuário"
        onPress={handleAtualizacao}
        color="#6200ee"
      />
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

export default AtualizacaoScreen;
