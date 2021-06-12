import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from "../../constants/colors";
import DefaultText from '../../components/UI/DefaultText';
import * as cartActions from '../../store/actions/cart'

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  const dispatch = useDispatch()

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl}} />
      <View style={styles.button}>
      <Button title='Add to Cart' color={colors.accent} onPress={()=>{
        dispatch(cartActions.addToCart(selectedProduct))
      }}/>
      </View>
      <DefaultText style={styles.price}>${selectedProduct.price.toFixed(2)}</DefaultText>
      <DefaultText style={styles.description}>{selectedProduct.description}</DefaultText>
    </ScrollView>
    
    
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontSize: 20,
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  button: {
    marginVertical: 10,
    alignItems: 'center'
  },
});

export default ProductDetailScreen;
