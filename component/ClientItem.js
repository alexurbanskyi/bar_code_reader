import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

function ClientItem() {

  const clientProductList = useSelector(
    state => state.clientListSlice.clienList,
  );
  const totalItem = clientProductList[0].pcs * clientProductList[0].priceProduct
  return (
    <View style={{flex:1, flexDirection: 'column'}}>
    <View style={styles.itemContainer}>
      <Text style={styles.itemNameTitle}>{clientProductList[0].nameProduct}</Text>
      <Text style={styles.itemTitle}>{clientProductList[0].priceProduct}</Text>
      <Text style={styles.itemTitle}>{clientProductList[0].pcs}</Text>
      <Text style={styles.itemTitle}>{totalItem}</Text>
    </View>
    <View style={styles.itemContainer}>
      <Text style={styles.itemNameTitle}>{clientProductList[0].nameProduct}</Text>
      <Text style={styles.itemTitle}>{clientProductList[0].priceProduct}</Text>
      <Text style={styles.itemTitle}>{clientProductList[0].pcs}</Text>
      <Text style={styles.itemTitle}>{totalItem}</Text>
    </View>
    <View style={styles.itemContainer}>
      <Text style={styles.itemNameTitle}>{clientProductList[0].nameProduct}</Text>
      <Text style={styles.itemTitle}>{clientProductList[0].priceProduct}</Text>
      <Text style={styles.itemTitle}>{clientProductList[0].pcs}</Text>
      <Text style={styles.itemTitle}>{totalItem}</Text>
    </View>
    </View>
  );
}

export default ClientItem;

const styles = StyleSheet.create({
  itemContainer: {
    //flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginVertical: 3
    
  },
  itemNameTitle: {
    color: 'white',
    backgroundColor: 'red',
    flexGrow: 1
  },
  itemTitle: {
    color: 'white',
    backgroundColor: 'red',
    width: '15%',
    textAlign: 'center'
    },
});
