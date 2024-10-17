import React from "react";
import { useFonts } from "expo-font";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  let estilo = estilos.texto;

  if (style?.fontWeight == "bold") {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "Arial",
    fontWeight: "normal",
  },
  textoNegrito: {
    fontWeight: "normal",
  },
});