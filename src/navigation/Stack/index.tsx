import React from 'react';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack.tsx';
import { APP_STACK, AUTH_STACK } from '../../constants/Screens.ts';
import { RootStackParamList } from '../../constants/StackParams.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <Stack.Screen
                    name={APP_STACK}
                    component={AppStack}
                    options={{ headerShown: false }}
                />
            ) : (
                <Stack.Screen
                    name={AUTH_STACK}
                    component={AuthStack}
                    options={{ headerShown: false }}
                />
            )}
        </Stack.Navigator>
    );
};

export default StackNavigator;
