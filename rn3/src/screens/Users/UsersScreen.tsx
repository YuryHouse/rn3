import {Button, Text, View} from "react-native";
import React from "react";
import {useAppNavigation, UsersPropsType} from "../../types/types";

export function UsersScreen({route}: UsersPropsType) {
    const navigation = useAppNavigation();
    const {id, name, isDone} = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>User Screen</Text>
            <Button title={'Jump to Home screen'} onPress={() => {
                navigation.navigate("Home")
            }}/>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{isDone ? 'true' : 'false'}</Text>
        </View>
    );
}