import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  Alert,
} from "react-native";
import api from "./src/services/api";

export default function App() {
  const [cep, setCep] = useState("");
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep === "") {
      Alert.alert("Erro", "Por favor, digite um CEP válido.");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      Keyboard.dismiss();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar o CEP.");
      console.log("ERROR: " + error);
    }
  }

  function limpar() {
    setCep("");
    inputRef.current.focus();
    setCepUser(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Consulta de CEP</Text>
        <Text style={styles.subtitle}>Digite o CEP que deseja consultar</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Ex: 79003241"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={buscar}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary} onPress={limpar}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && (
        <View style={styles.resultArea}>
          <Text style={styles.resultText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.resultText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.resultText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.resultText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.resultText}>Estado: {cepUser.uf}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 16,
    color: "#475569",
    marginTop: 8,
    textAlign: "center",
  },
  inputArea: {
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    width: "100%",
    padding: 12,
    fontSize: 16,
    color: "#1E293B",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#DC2626",
    padding: 15,
    borderRadius: 8,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  resultArea: {
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resultText: {
    fontSize: 18,
    color: "#1E293B",
    marginBottom: 8,
  },
});
