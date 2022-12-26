import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../ProductItem';

function ProductsList() {
  const productsList = useSelector(state => state.productsSlice.productsList);
  console.log('productList --from prodlist -->', productsList);

  return (
    <View style={styles.container}>
      {productsList.length === 0 ? (
        <View>
          <Text style={styles.empty}>Your products list is empty</Text>
          <Text style={{textAlign: 'center'}}>
            Add new products in 'Create New Product' menu
          </Text>
        </View>
      ) : (
        <FlatList
          data={productsList}
          renderItem={itemData => {
            return (
              <ProductItem
                fotoData={itemData.item.fotoData}
                nameProduct={itemData.item.nameProduct}
                priceProduct={itemData.item.priceProduct}
              />
            );
          }}
          keyExtractor={item => item.barData}
        />
      )}
    </View>
  );
}

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8dcee0',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  empty: {
    fontSize: 22,
    textAlign: 'center',
  },
});
