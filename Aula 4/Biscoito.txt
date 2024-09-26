import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Button } from 'react-native';

/*

Aula 4: 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      alert('Digite seu nome!');
      return;
    }

    this.setState({nome: 'Bem-vindo ' + this.state.input});
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Digite seu nome?"
        underlineColorAndroid="transparent"
        onChangeText={ (texto) => this.setState({input: texto}) }
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>{this.state.nome}</Text>

      </View>
    );
  }
}

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

*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("./assets/biscoito.png"),
    };
 
    this.pegaNome = this.pegaNome.bind(this);
 
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
 
    this.frases = [
      "Não há que ser forte. Há que ser flexível.",
      "A vida trará coisas boas se tiver paciência.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
      "A juventude não é uma época da vida, é um estado de espírito."
    ]
  }
 
  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./assets/biscoitoAberto.png')
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}>
        </Image>

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  conainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    wigth: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;
