import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

function Main({ navigation }){

//    const prodList = useSelector(state => state.productsSlice )

    return(
        <View style={styles.container}>
           <Pressable 
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
            onPress = {() => navigation.navigate('AddGoods')}
           >
                <Text style={styles.buttonTitle} >Create New Product</Text>
           </Pressable>
           <Pressable 
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
            onPress = {() => navigation.navigate('NewClient')}
           >
                <Text style={styles.buttonTitle} >New Client</Text>
           </Pressable>
           <Pressable 
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
            onPress = {() => navigation.navigate('CheckBarCode')}
           >
                <Text style={styles.buttonTitle} >Check barCode</Text>
           </Pressable>
           <Pressable 
            style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
            onPress = {() => navigation.navigate('ProductsList')}
           >
                <Text style={styles.buttonTitle} >Products List</Text>
           </Pressable>
        </View>
    );
}
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dcee0',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    button:{
        backgroundColor: '#6cbce0',
        padding: 10,
        marginVertical: 10,
    },
    buttonPressed:{
        backgroundColor: '#dce655'
    },
    buttonTitle:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
});