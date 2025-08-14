import React from 'react';
import {
    ActivityIndicator,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/Stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor="transparent"
                    translucent={Platform.OS === 'android'}
                />
                <Provider store={store}>
                    <PersistGate
                        loading={<ActivityIndicator size="large" />}
                        persistor={persistor}
                    >
                        <NavigationContainer>
                            <StackNavigator />
                        </NavigationContainer>
                    </PersistGate>
                </Provider>
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
