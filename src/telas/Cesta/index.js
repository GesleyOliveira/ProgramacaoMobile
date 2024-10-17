import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Texto from "../../componentes/texto";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <FlatList //O FlatList serve para renderizar e fazer a rolar itens grandes em tela, como objetos
        //pode ser usado também o <ScrollView<</ScrollView> para coloar scroll na tela.
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
