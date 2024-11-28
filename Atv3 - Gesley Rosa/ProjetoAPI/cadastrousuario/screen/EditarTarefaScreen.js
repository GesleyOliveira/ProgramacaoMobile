import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";

const AtualizacaoScreen = ({ route, navigation }) => {
  const { id: taskId } = route.params;  // Recebe o taskId passado na navegação
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para buscar os dados da tarefa
  useEffect(() => {
    const fetchTarefa = async () => {
      if (taskId) {
        try {
          const response = await axios.get(`http://10.68.152.206:3000/api/tarefas/${taskId}`);
          if (response.data) {
            setStatus(response.data.status || "");
            setDescricao(response.data.descricao || "");
          } else {
            console.error("Erro: Tarefa não encontrada");
          }
        } catch (error) {
          console.error("Erro ao carregar tarefa:", error);
        }
      }
    };

    fetchTarefa();
  }, [taskId]);  // Chama sempre que o id muda

  const handleAtualizacao = async () => {
    if (!taskId || !status || !descricao) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }

    try {
      const response = await axios.put(
        `http://10.68.152.206:3000/api/tarefas/${taskId}`,
        { status, descricao }
      );
      Alert.alert("Sucesso", "Tarefa atualizada com sucesso!");
      console.log(response.data);
      navigation.goBack();  // Volta para a tela anterior após a atualização
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      Alert.alert("Erro", "Falha ao atualizar tarefa.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualização de Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="ID da Tarefa"
        value={taskId.toString()}
        editable={false} // Impede que o usuário edite o ID
      />

      <TextInput
        style={styles.input}
        placeholder="Status"
        value={status}
        onChangeText={setStatus}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <Button
        title="Atualizar Tarefa"
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
