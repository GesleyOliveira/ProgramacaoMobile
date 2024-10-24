import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function CadastroScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cadastro</Text>
            <TextInput placeholder="Nome" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }} />
            <TextInput placeholder="Email" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }} />
            <Button title="Cadastrar" onPress={() => alert('Cadastro realizado!')} />
        </View>
    );
}
