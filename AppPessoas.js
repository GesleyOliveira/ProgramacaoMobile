import React, { Component } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

import Pessoas from './src/Pessoas/Pessoas'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [
        { id: 1, nome: "Ana Silva", idade: 28, email: "ana.silva@example.com" },
        { id: 2, nome: "Bruno Costa", idade: 34, email: "bruno.costa@example.com" },
        { id: 3, nome: "Carla Souza", idade: 22, email: "carla.souza@example.com" },
        { id: 4, nome: "Daniel Lima", idade: 30, email: "daniel.lima@example.com" },
        { id: 5, nome: "Eduarda Alves", idade: 26, email: "eduarda.alves@example.com" },
        { id: 6, nome: "Felipe Rocha", idade: 29, email: "felipe.rocha@example.com" },
        { id: 7, nome: "Gabriela Mendes", idade: 31, email: "gabriela.mendes@example.com" },
        { id: 8, nome: "Henrique Oliveira", idade: 27, email: "henrique.oliveira@example.com" },
        { id: 9, nome: "Isabela Ferreira", idade: 25, email: "isabela.ferreira@example.com" },
        { id: 10, nome: "João Pereira", idade: 33, email: "joao.pereira@example.com" }
      ]
    };
  }
  render(){
    return(
      <View style={styles.container}>

        <FlatList>
          data={this.state.lista}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=><Pessoas data={item}/>}
        </FlatList>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  conainer:{
    flex:1,
  },
});

export default App;
