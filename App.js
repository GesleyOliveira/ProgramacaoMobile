import React, { Component } from "react";
import { View, StyleSheet, Text, Switch, Button, TextInput } from "react-native";

import { Picker } from "@react-native-picker/picker";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            sexo:0,
            sexos: [
                {key: 1, nome: 'Masculino'},
                {key: 2, nome: 'Feminino'},
            ]
        };
    };

    render(){
        return(
          <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Digite seu Nome"
            underlineColorAndroid="transparent"
            onChangeText={ (texto) => this.setState({input: texto}) }
            />
        <View style={styles.container}>
            <Text style={styles.logo}>Informe seu sexo:</Text>
        <Picker 
        selectedValue={this.state.sexo} 
        onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
        >
         {sexosItem}
        </Picker>
        </View>

        <View style={styles.container}>
            <Text style={styles.logo}>Escolha o seu limite:</Text>
        </View>
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
    
        <Button title="Criar Conta" onPress={this.entrar} />
    
            <Text style={styles.texto}>{this.state.nome}</Text>
    
          
    </View>

        );
    };
};

export default App;
