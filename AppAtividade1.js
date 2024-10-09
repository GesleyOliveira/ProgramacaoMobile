import React, { Component } from "react";
import { View, StyleSheet, Text, Switch, Button, TextInput, Alert } from "react-native";
import Slider from "@react-native-community/slider";

import { Picker } from "@react-native-picker/picker";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor: 0,
            sexo:0,
            sexos: [
                {key: 0, nome: 'Masculino'},
                {key: 1, nome: 'Feminino'},
            ]
        };
        this.pegaNome = this.pegaNome.bind(this);
        this.ativarConta = this.ativarConta.bind(this);
    };

    pegaNome(texto) {
        if (texto.length > 0) {
          this.setState({ nome: texto });
        } else {
          this.setState({ nome: "" });
        }
      }

    ativarConta() {
        const { nome, status, valor, sexo, sexos } = this.state;
        const sexoNome = sexos.find((v) => v.key == sexo).nome;
        const statusNome = status ? "Casado" : "Solteiro";
     
        Alert.alert(
          "Sua conta foi criada com sucesso!",
          `Nome: ${nome}\nSexo: ${sexoNome}\nLimite: $${valor.toFixed(
            1
          )}\nStatus: ${statusNome}`
        );
      }
     

    render(){
        let sexosItem = this.state.sexos.map( (v) => {
            return <Picker.Item key={v.key} value={v.key} label={v.nome} />
        })
        return(
          <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Digite seu Nome"
            underlineColorAndroid="transparent"
            onChangeText={ this.pegaNome}
            />

        <Text style={{ textAlign: "center", fontSize: 30 }}>Informe seu sexo:</Text>
        <Picker selectedValue={this.state.sexo} onValueChange={ (itemValue) => this.setState({sexo: itemValue}) }
        >
         {sexosItem}
        </Picker>



        <Text style={{ textAlign: "center", fontSize: 30 }}>Escolha o seu limite:</Text>

        <Slider
          minimumValue={0}
          maximumValue={10000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          Limite da conta: ${this.state.valor.toFixed(1)}
        </Text>

        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="#FF0000"
        />
        <Text style={{ textAlign: "center", fontSize: 30 }}>
          {this.state.status ? "Casado" : "Solteiro"}
        </Text>
    
        <Button title="Criar Conta" onPress={this.ativarConta} />
    
    </View>

        );
    };
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    texto:{
      textAlign: 'center',
      fontSize: 25
    }
  });

export default App;
