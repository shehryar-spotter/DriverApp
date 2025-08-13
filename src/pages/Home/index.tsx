import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text> Go Back!</Text>
            </TouchableOpacity>
            <Text>Welcome to the spotter.ai</Text>
        </View>
    );
};

export default Home;
