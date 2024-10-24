import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ConsultaScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Consulta</Text>
            <Button title="Consultar" onPress={() => alert('Consulta realizada!')} />
        </View>
    );
}
