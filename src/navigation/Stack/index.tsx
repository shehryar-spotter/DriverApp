import React from 'react';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack.tsx';
import { APP_STACK, AUTH_STACK } from '../../constants/Screens.ts';
import { RootStackParamList } from '../../constants/StackParams.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={AUTH_STACK}>
            <Stack.Screen
                name={AUTH_STACK}
                component={AuthStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={APP_STACK}
                component={AppStack}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
