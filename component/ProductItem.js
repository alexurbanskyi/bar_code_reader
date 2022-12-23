import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function ProductItem({fotoData, nameProduct, priceProduct}){

    // const productsList = useSelector(state => state.productsSlice);
    // console.log('productList --from prodItem-->', productsList)

    return(
        <View style={styles.itemContainer}>
            <View style={styles. fotoContainer} >
                <Image style={styles. foto} source={{uri: fotoData}}/>
            </View>
            <View style={styles.productDetails}>
                <View>
                    <Text style={{textAlign: 'center'}}>Name</Text>
                    <Text style={styles.productName}>{nameProduct}</Text>
                </View>
                <View>
                    <Text style={{textAlign: 'center'}}>Price</Text>
                    <Text style={styles.productPrice}>{priceProduct} UAH</Text>
                </View>
            </View>
        </View>
    );
}

export default ProductItem;

const styles = StyleSheet.create({
      // item element
    itemContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        flexDirection: 'row',
        marginVertical: 6
        
    },
    productDetails:{
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'space-around',
        alignItems: 'center'
        
       
    },
    fotoContainer:{
        backgroundColor: 'yellow',
        width: 150,
        height: 150
    },
    foto:{
        flex: 1,
        resizeMode: 'cover'
    },
    productName:{
        fontSize: 25
    },
    productPrice:{
        fontSize: 25
    },

});