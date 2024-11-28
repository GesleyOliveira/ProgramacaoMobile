import React, { useState, useCallback } from "react";
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  // Função para buscar as tarefas
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://10.68.152.206:3000/api/tarefas"); // Substitua pela URL da sua API
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Erro ao buscar tarefas", error);
    }
  };

  // Função para deletar uma tarefa
  const deleteTask = async (id) => {
    try {
      await fetch(`http://10.68.152.206:3000/api/tarefas/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa", error);
    }
  };

  // Função para navegar para a tela de cadastro de tarefa
  const navigateToAddTask = () => {
    navigation.navigate("Cadastro");
  };

  // Função para navegar para a tela de atualização de tarefa
  const navigateToUpdateTask = (taskId) => {
    navigation.navigate("Alteração", { id : taskId });
  };

  // Usando useFocusEffect para garantir que as tarefas sejam atualizadas quando a tela for acessada
  useFocusEffect(
    useCallback(() => {
      fetchTasks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App</Text>
      
      {/* Botão para adicionar nova tarefa */}
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar nova tarefa"
          onPress={navigateToAddTask}
          color="#6200ee"
        />
      </View>

      {/* Lista de tarefas */}
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.descricao}</Text>
            <Text style={styles.taskText}>{item.status}</Text>

            <View style={styles.taskButtons}>
              <TouchableOpacity onPress={() => navigateToUpdateTask(item.id)} style={styles.taskButton}>
                <Text style={styles.taskButtonText}>Atualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.taskButton}>
                <Text style={styles.taskButtonText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
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
  taskContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#333",
  },
  taskButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  taskButton: {
    backgroundColor: "#6200ee",
    padding: 10,
    borderRadius: 5,
  },
  taskButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomeScreen;


