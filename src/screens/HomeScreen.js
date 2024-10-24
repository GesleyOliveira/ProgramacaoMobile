import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Bem-vindo à Tela Home</Text>
            <Button
                title='Ir para Detalhes'
                onPress={() => navigation.navigate('Details', { itemId: 42 })}
            />
            <Button
                title='Ir para Cadastro'
                onPress={() => navigation.navigate('Cadastro')}
            />
            <Button
                title='Ir para Consulta'
                onPress={() => navigation.navigate('Consulta')}
            />
        </View>
    );
}
