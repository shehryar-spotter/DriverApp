import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import { LOGIN_SCREEN, SIGNUP_SCREEN } from '../../constants/Screens.ts';
import { AuthStackParamList } from '../../constants/StackParams.ts';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={LOGIN_SCREEN}
            screenOptions={{ headerShown: true }}
        >
            <Stack.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={SIGNUP_SCREEN}
                component={Signup}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
