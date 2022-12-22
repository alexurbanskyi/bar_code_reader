import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { View, Text, Button, StyleSheet, Image, Pressable } from "react-native";
import  Modal from "react-native-modal";
import BarCameraComponent from "../BarCameraComponent";
import { useForm, Controller } from "react-hook-form";
import {TextInput} from '@react-native-material/core'
import FotoCameraComponent from "../FotoCameraComponent";
import {addprod} from '../../store/slices/productsSlice' 

import { useToast } from "react-native-toast-notifications";


function AddGoods({ navigation }){

    const [isBarModalVisible, setBarModalVisible] = useState(false);
    const [isFotoModalVisible, setFotoModalVisible] = useState(false);

    const [barData, setBarData] = useState(null);
    const [fotoData, setFotoData] = useState(null);

    const barToggleModal = () => {setBarModalVisible(!isBarModalVisible)};
    const fotoToggleModal = () => {setFotoModalVisible(!isFotoModalVisible)};

    const { control, handleSubmit, formState: { errors, isValid}, } = useForm({mode: 'onBlur'});
    const isValidData = barData && fotoData && isValid

    // const prodList = useSelector(state => state.productsSlice )
   
    const dispatch = useDispatch();

    const toast = useToast();

    function onSubmit(data) {
        if (isValidData){
            const productData = {barData: barData, fotoData: fotoData, nameProduct: data.name, priceProduct: data.price} 
            dispatch(addprod(productData))

            toast.show('Product Created Successfull', {
                type: "success",
                placement: "bottom",
                duration: 2000,
                animationType: "zoom-in",
            })
        
            navigation.navigate('MainPage')
        }
    }
   
    return(
        <View style={styles.container}>
            <View style={styles.barCodeContainer}>
                <Text style={styles.title}>Please scan barCode of the product</Text>
                <View style={styles.barCode}>
                    {
                        barData 
                        ? 
                        <Text style={styles.barCodeNumber}>{barData}</Text>
                        :
                        <Text style={styles.barCodeNumber}>Please scan barCode ...</Text>
                    }
                </View>
                <Button title="Scan Barcode" onPress={barToggleModal} />
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.title}>Please enter the Name of the product</Text>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        color="#0d298f"
                        variant="standart"
                        label={'Name'}
                        inputStyle={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="name"
                />
                {errors.name && <Text style={styles.errorText}>Enter Name Required</Text>}
            </View>
            <View style={styles.elementContainer}>
                <Text style={styles.title}>Please enter the Price of the product</Text>
                <Controller
                    control={control}
                    rules={{
                    required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        keyboardType={'numeric'}
                        color="#0d298f"
                        variant="standart"
                        label={'Price'}
                        inputStyle={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    )}
                    name="price"
                />
                {errors.price && <Text style={styles.errorText}>Enter Price Required</Text>}
            </View>
            <View>
                <Text style={styles.title}>Please take the Foto of the product</Text>
                <View style={styles.fotoContainer}>
                    <View style={styles.foto}>
                        {
                            fotoData 
                            ?
                            <Image style={{flex: 1, height: '100%', width: '100%', resizeMode: 'cover'}} source={{uri:fotoData}} />
                            :
                            <Text style={styles.fotoText}>Take Foto</Text>

                        }
                    </View>
                </View>
                <Button title="Take Foto" onPress={fotoToggleModal} />
                <Pressable style={isValidData ? {...styles.addButton, ...styles.validButton} : styles.addButton} onPress={handleSubmit(onSubmit)}>
                    <Text style={styles.addButtonTitle}> ADD NEW PRODUCT</Text>
                </Pressable>
                
            </View>
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
            <Modal style={styles.modal} isVisible={isFotoModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.fotoCamera}>
                        <FotoCameraComponent setFotoModalVisible={setFotoModalVisible} setFotoData={setFotoData} />
                    </View>
                    <View style={styles.hidenButton}>
                        <Button  title="Close Camera" onPress={fotoToggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default AddGoods;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dcee0',
        paddingHorizontal: 20,
        //justifyContent: 'center'
    },
    barCodeContainer: {
        paddingVertical: 10,
    },
    barCodeTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    barCode: {
        backgroundColor: '#6cbce0',
        paddingVertical: 20,
        marginVertical: 15,
        marginHorizontal: 40
    },
    barCodeNumber: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    modal:{
       flex: 1,
    },
    modalContainer: {
       flex: 1,
       justifyContent: 'center'
    },
    hidenButton:{
       marginTop: 40
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
    //for all container
    elementContainer:{
        paddingVertical: 10
    },
    // for all title
    title:{
        paddingBottom: 10,
        fontSize: 17,
        fontWeight: 'bold', 
        
    },
    input:{
        backgroundColor: '#6cbce0',
        padding: 5,
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    errorText:{
        color: 'red',
        fontWeight: 'bold'
    },
    // FOTO
    fotoContainer:{
        alignItems: 'center',
        marginBottom: 15
    },
    foto:{
        width: 180,
        height: 180,
        backgroundColor: '#6cbce0',
    },
    fotoText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    //foto camera
    fotoCamera:{
        flex: 1
    },
    //add button
    addButton:{
        backgroundColor: 'gray',
        paddingVertical: 5,
        marginTop: 10
    },
    addButtonTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    validButton:{
        backgroundColor: '#07a649'
    },


});