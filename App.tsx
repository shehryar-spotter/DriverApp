import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/Stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor="transparent"
                    translucent={Platform.OS === 'android'}
                />
                <NavigationContainer>
                    <StackNavigator />
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default App;
