import {StyleSheet, View} from 'react-native';
import React from "react";
import {RootStackParamList} from "./types/types";
import {HomeScreen} from "./screens/Home/HomeScreen";
import {UsersScreen} from "./screens/Users/UsersScreen";
import {DetailsScreen} from "./screens/Details/DetailsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {createDrawerNavigator} from "@react-navigation/drawer";

const Tab = createBottomTabNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator<RootStackParamList>();
// const Screen = createNativeStackNavigator<RootStackParamList>();

export function Main() {
    return (
        <View style={styles.container}>
            <Tab.Navigator initialRouteName={'Home'}>
                <Tab.Screen name={"Home"} component={HomeScreen}/>
                <Tab.Screen name={"Details"} component={DetailsScreen}/>
                <Tab.Screen name={"Users"} component={UsersScreen}/>
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
