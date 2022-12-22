import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Provider} from 'react-redux'
import { ToastProvider } from 'react-native-toast-notifications'
import { store } from './store/store';

import AddGoods from './component/pages/AddGoods';
import NewClient from './component/pages/NewClient';
import Main from './component/pages/Main'
import CheckBarCode from './component/pages/CheckBarCode';

const Stack = createNativeStackNavigator();

const App: () => React$Node = () => {

    return (
        <>
        <ToastProvider
            textStyle={{ fontSize: 20 }}
            offsetBottom={140}
        >
            <NavigationContainer>
                <Provider store={store}>
                    <Stack.Navigator>
                        <Stack.Screen name='MainPage' component={Main} />
                        <Stack.Screen name='AddGoods' component={AddGoods} />
                        <Stack.Screen name='NewClient' component={NewClient}/>
                        <Stack.Screen name='CheckBarCode' component={CheckBarCode}/>
                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
        </ToastProvider>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c3dbdb'
    },
});

export default App;
