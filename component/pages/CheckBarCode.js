import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import  Modal from "react-native-modal";
import BarCameraComponent from "../BarCameraComponent";




function CheckBarCode(){
    const productsList = useSelector(state => state.productsSlice);

    const [isSearched, setIsSearched] = useState(false);
    const [isBarModalVisible, setBarModalVisible] = useState(false);
    const [barData, setBarData] = useState(null);
    const barToggleModal = () => {
        setIsSearched(false)
        //setBarData(null)
        setBarModalVisible(!isBarModalVisible)
    };
    
    
  
    useEffect(() => {
        if (barData) {
            const searchProduct = productsList.find((item) => item.barData === barData )
            setIsSearched(searchProduct);
        }
    },[barData]);
    console.log('RANDER!!!')
    return(
        <View style={styles.container}>
            {
                !isSearched 
                ?
                <View >
                    {
                        !barData
                        ?
                        <Text style={styles.scanTitle}>SCAN YOUR PRODUCT ...</Text>
                        :
                        <>
                            <Text style={{...styles.scanTitle, color: '#e06060'}}>PRODUCT NOT FOUND</Text>
                            <Text style={styles.note}>Please add the product to the list</Text>
                        </>

                    }
                    <Button title="Scan Barcode" onPress={barToggleModal} />
                </View>
                :
                <View style={styles.product}>
                    <Text style={styles.title}> Product Name</Text>
                    <Text style={styles.productTitle}> {isSearched?.nameProduct}</Text>
                    <Text style={styles.title}>Product Price</Text>
                    <Text style={styles.productTitle}>{isSearched?.priceProduct}</Text>
                    <Image style={styles.foto} source={{uri: isSearched?.fotoData}}/>
                </View>
            }
            <Modal style={styles.modal} isVisible={isBarModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.scaner}>
                        <BarCameraComponent setBarModalVisible={setBarModalVisible} setBarData={setBarData} />
                        <View style={styles.scanerLine}></View>
                    </View>
                    <View style={styles.hidenButton}>
                        <Button  title="Close Scaner" onPress={barToggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default CheckBarCode;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dcee0',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    modal:{
        flex: 1,
     },
     modalContainer: {
        flex: 1,
        justifyContent: 'center'
     },
    scaner:{
        position: 'relative'
    },
    scanerLine:{
        position: 'absolute',
        left: 0,
        top: '50%',
        zIndex: 1,
        width: '100%',
        borderBottomColor: 'red',
        borderWidth: 1,
    },
    scanTitle:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 50
    },
    note:{
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        paddingVertical: 15
    },
    product:{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    productTitle:{
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginVertical: 10
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginVertical: 10
    },
    foto:{
        height: '40%', 
        width: '40%', 
        //resizeMode: 'cover', 
        alignContent: 'center'
    },
});