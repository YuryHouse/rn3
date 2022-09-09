import {Main} from "./src/Main";
import {StyleSheet, View} from 'react-native';
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";


export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Main/>
                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});