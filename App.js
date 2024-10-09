import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

import Cesta from "./src/Telas/Cesta";

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar />
            <Cesta />
        </SafeAreaView>
    );
}