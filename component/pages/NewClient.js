import React, {useState, useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import BarCameraComponent from '../BarCameraComponent';
import {useDispatch, useSelector} from 'react-redux';
import {addClientProduct} from '../../store/slices/clientListSlice';
import ClientItem from '../ClientItem';

function NewClient() {
  const [isBarModalVisible, setBarModalVisible] = useState(false);
  const [isProductModalVisible, setProductModalVisible] = useState(false);
  const [barData, setBarData] = useState(null);
  const [isSearched, setIsSearched] = useState(null);
  const [pcs, setPcs] = useState(1);
  const productsList = useSelector(state => state.productsSlice.productsList);
  const clientProductList = useSelector(state => state.clientListSlice.clienList);

  console.log('CLI list -->', clientProductList);

  const dispatch = useDispatch();

  const barToggleModal = () => {
    setBarModalVisible(!isBarModalVisible);
  };

  const toggleProductModal = () => {
    setProductModalVisible(false);
    setBarData(null);
  };
  const toggleAddProductModal = () => {
    setProductModalVisible(false);
    setBarData(null);
    const clientItem = {
      barData: isSearched.barData,
      nameProduct: isSearched.nameProduct,
      priceProduct: isSearched.priceProduct,
      pcs: pcs,
    };
    dispatch(addClientProduct(clientItem));
    setPcs(1);
  };

  const calculateClient = () => {

  }

  const increment = () => {
    setPcs(prev => prev + 1);
  };

  const decrement = () => {
    if (pcs === 1) {
      setPcs(1);
    } else {
      setPcs(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (barData) {
      const searchProduct = productsList.find(item => item.barData === barData);
      setIsSearched(searchProduct);
      setProductModalVisible(true);
    }
  }, [barData]);

  // console.log('BAR -->', isSearched);
  // console.log('isSearched --->', isSearched);

  return (
    <View style={styles.container}>
      <View style={styles.buttonHolder}>
        <Button title="Scan product" onPress={barToggleModal} />
      </View>
      <View style={styles.shoppingList}>
        <Text style={styles.shoppingListTitle}>Shopping List</Text>
      </View>
      <View style={styles.listHolder}>
        <View style={styles.list}>
          <ClientItem />
        </View>
        <View>
          <Text>TOTAL </Text>
        </View>
      </View>
      <View style={styles.buttonHolder}>
        <Button title="calculate the client" onPress={calculateClient} />
      </View>

      <Modal
        style={styles.modal}
        isVisible={isBarModalVisible}
        animationInTiming={10}>
        <View style={styles.modalContainer}>
          <View style={styles.scaner}>
            <BarCameraComponent
              setBarModalVisible={setBarModalVisible}
              setBarData={setBarData}
            />
            <View style={styles.scanerLine}></View>
          </View>
          <View style={styles.hidenButton}>
            <Button title="Close Scaner" onPress={barToggleModal} />
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        isVisible={isProductModalVisible}
        backdropOpacity={1}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}>
        <View style={styles.modalContainer}>
          {!isSearched ? (
            <>
              <Text style={{...styles.scanTitle, color: '#e06060'}}>
                PRODUCT NOT FOUND
              </Text>
              <Text style={styles.note}>
                Add new products in 'Create New Product' menu
              </Text>
              <View style={styles.hidenButton}>
                <Button title="CLOse" onPress={toggleProductModal} />
              </View>
            </>
          ) : (
            <>
              <View style={styles.product}>
                <Image
                  style={styles.foto}
                  source={{uri: isSearched?.fotoData}}
                />
                <Text style={styles.title}>Name</Text>
                <Text style={styles.productTitle}>
                  {isSearched?.nameProduct}
                </Text>
                <Text style={styles.title}>Price</Text>
                <Text style={styles.productTitle}>
                  {isSearched?.priceProduct} UAH
                </Text>
              </View>
              <View>
                <Text style={styles.title}>number of pieces</Text>
              </View>
              <View style={styles.buttonWrapper}>
                <Pressable style={styles.addButton} onPress={decrement}>
                  <Text style={styles.addButtonTitle}>-</Text>
                </Pressable>
                <View style={styles.pcsHolder}>
                  <Text style={styles.pcsTitle}>{pcs}</Text>
                </View>
                <Pressable style={styles.addButton} onPress={increment}>
                  <Text style={styles.addButtonTitle}>+</Text>
                </Pressable>
              </View>
              <View style={styles.hidenButton}>
                <Button title="ADD product" onPress={toggleAddProductModal} />
              </View>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
}

export default NewClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8dcee0',
    paddingHorizontal: 20,
    //justifyContent: 'center',
  },
  buttonHolder: {
    paddingVertical: 20,
  },
  shoppingList: {
    borderBottomWidth: 2,
    //borderBottomColor: '#919090',
    paddingBottom: 5,
  },
  shoppingListTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    //color: 'white'
  },
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scaner: {
    position: 'relative',
  },
  scanerLine: {
    position: 'absolute',
    left: 0,
    top: '50%',
    zIndex: 1,
    width: '100%',
    borderBottomColor: 'red',
    borderWidth: 1,
  },
  scanTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 50,
  },
  note: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    paddingVertical: 35,
  },
  product: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#a8abad',
    textAlign: 'center',
    marginVertical: 5,
  },
  productTitle: {
    fontSize: 25,
    color: 'white',
  },
  foto: {
    height: '30%',
    width: '30%',
    //resizeMode: 'cover',
    alignContent: 'center',
    marginBottom: 15,
  },
  buttonWrapper: {
    backgroundColor: '#78bdeb',
    flexDirection: 'row',
    marginBottom: 30,
  },
  //add button
  addButton: {
    //backgroundColor: 'red',
    paddingVertical: 10,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonTitle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  pcsHolder: {
    backgroundColor: '#98caeb',
    flex: 1,
    alignItems: 'center',
    marginVertical: 10,
  },
  pcsTitle: {
    fontSize: 40,
  },
  //LIST
  listHolder: {
    backgroundColor: 'gray',
    flex: 1
  },
  list: {
    backgroundColor: 'green',
    flexGrow: 1,
    //flex: 1,
  },
});
