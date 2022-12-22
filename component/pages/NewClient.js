import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {useDispatch, useSelector} from "react-redux";


function NewClient(){
    const prodObj = useSelector(state => state.productsSlice)
    console.log('prodObj ----->', prodObj);
    return(
        <View style={styles.container}>
            <Image style={{flex: 1, height: '100%', width: '100%', resizeMode: 'cover'}} source={{uri: prodObj[0]?.fotoData}}/>
           <Text>NEW CLIENT!</Text>
        </View>
    );
}

export default NewClient;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dcee0',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
});