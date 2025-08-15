import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice.ts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const insets = useSafeAreaInsets();
    const logOutUser = () => {
        dispatch(logout());
    };

    return (
        <View style={{ marginTop: insets.top }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> Go Back!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logOutUser}>
                <Text> Logout</Text>
            </TouchableOpacity>
            <Text>Welcome to the spotter.ai</Text>
        </View>
    );
};

export default Home;
