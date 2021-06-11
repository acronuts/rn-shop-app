import React from "react";
import {
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import colors from "../../constants/colors";

const ProductItem = (props) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableComp onPress={props.onViewDetail} useForeground>
          <View>
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttons}>
              <Button
                color={colors.primary}
                title="details"
                onPress={props.onViewDetail}
              />
              <Button
                color={colors.accent}
                title="To Cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
        </TouchableComp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    // overflow: "hidden",
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  titleContainer: {
    alignItems: "center",
    height: "15%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  buttons: {
    flexDirection: "row",
    height: "25%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default ProductItem;
