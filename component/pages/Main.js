import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {addProductsFromAsync} from '../../store/slices/productsSlice';

function Main({navigation}) {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsSlice.proList);

  // function for all keys of AsyncStorage
  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      console.log('Error --->', e);
    }
  };
  getAllKeys(); //end all keys

  //function get data from AsyncStorage
  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('ProdList');
      return jsonValue != null
        ? console.log('Data in AsyncStorage --->', JSON.parse(jsonValue))
        : console.log('NO DATA!!! Async Storage ---->');
    } catch (e) {
      console.log('Error --->', e);
    }
  };
  //end get data

  //Clear AsyncStorage
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('ProdList');
      console.log('CLEAR ---> !!!');
    } catch (e) {
      console.log('Error --->', e);
    }
  };
  //end remove data from Async Storage

  // Get list of products from Async Storage
  const addProductListFromAsync = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('ProdList');
      return jsonValue != null
        ? dispatch(addProductsFromAsync(JSON.parse(jsonValue)))
        : console.log('NO DATA!!! Async Storage ---->');
    } catch (e) {
      console.log('Error --->', e);
    }
  };

  useEffect(() => {
    addProductListFromAsync(); // add List of Products to STORE
  }, []);
  // end get Data from Async Storage

  return (
    <View style={styles.container}>
      {/* <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={getMyObject}>
        <Text style={styles.buttonTitle}>CONSOLE ASYNC Storage</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={removeValue}>
        <Text style={styles.buttonTitle}>CLEAR AsyncStorage</Text>
      </Pressable> */}
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate('AddGoods')}>
        <Text style={styles.buttonTitle}>Create New Product</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate('NewClient')}>
        <Text style={styles.buttonTitle}>New Client</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate('CheckBarCode')}>
        <Text style={styles.buttonTitle}>Check barCode</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={() => navigation.navigate('ProductsList')}>
        <Text style={styles.buttonTitle}>Products List</Text>
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
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#6cbce0',
    padding: 10,
    marginVertical: 10,
  },
  buttonPressed: {
    backgroundColor: '#dce655',
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
