import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";


function ProductsList(){

    const productsList = useSelector(state => state.productsSlice);
    console.log('productList --from prodList-->', productsList)
   
    return(
        <View style={styles.container}>
           <FlatList 
                data={productsList} 
                renderItem={(itemData) => {
                    return(
                        // {/* <Text>{itemData.item.priceProduct}</Text> */}
                        
                        <ProductItem 
                            fotoData={itemData.item.fotoData}
                            nameProduct={itemData.item.nameProduct} 
                            priceProduct={itemData.item.priceProduct}
                        />
                      
                    )
                }}
                keyExtractor={(item) => item.barData}
            />

          
        </View>
    );
}

export default ProductsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8dcee0',
        paddingHorizontal: 20,
        justifyContent: 'center'
    },

});