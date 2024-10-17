import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import Cesta from "./src/telas/Cesta";
import Mock from "./src/Mocks/cesta";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar />
            <Cesta {...Mock} />
        </SafeAreaView>
    );
}