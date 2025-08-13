import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HOME } from '../../constants/Screens.ts';
import Home from '../../pages/Home';
import { AppStackParamList } from '../../constants/StackParams.ts';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={HOME}
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name={HOME}
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;
