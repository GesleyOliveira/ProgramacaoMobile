import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

const CadastroScreen = () => {
  const [status, setStatus] = useState("pendente");
  const [descricao, setDescricao] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await axios.post(
        "http://10.68.152.206:3000/api/tarefas",
        { status, descricao }
      );
      console.log(response.data);
      Alert.alert("Sucesso", response.data.message);
      setDescricao("");
      setStatus("pendente");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Tarefa</Text>
      
      <Text style={styles.label}>Status</Text>
      <Picker
        selectedValue={status}
        style={styles.input}
        onValueChange={(itemValue) => setStatus(itemValue)}
      >
        <Picker.Item label="Pendente" value="pendente" />
        <Picker.Item label="Completo" value="completo" />
      </Picker>

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      
      <Button title="Cadastrar" onPress={handleCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default CadastroScreen;
