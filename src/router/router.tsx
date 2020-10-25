



import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';

import ListScreen from "../pages/list";
import ListPage from "../pages/list";
import DetailScreen from "../pages/detail";


function HomeScreen({navigation}:any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen 666</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('List')}
            />
        </View>
    );
}



export const Stack = createStackNavigator();

export function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" mode="modal">
                <Stack.Screen name="List" component={ListPage} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


