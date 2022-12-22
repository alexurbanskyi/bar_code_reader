import React, {useEffect} from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useToast } from "react-native-toast-notifications";

function Main({ navigation }){

    const toast = useToast();
    
    // toast.show('HI!', {
    //     type: "warning",
    //     placement: "bottom",
    //     duration: 4000,
    // })
   console.log('RANDER!!!')

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
        backgroundColor: '#f2ea44',
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