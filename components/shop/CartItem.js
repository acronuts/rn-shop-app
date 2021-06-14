import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DefaultText from "./../UI/DefaultText";
import colors from "../../constants/colors";

const CartItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <DefaultText style={styles.quantity}>{props.quantity} </DefaultText>
        {/* <View style={styles.titleContainer}> */}
          <DefaultText style={styles.title} numberOfLines={1} ellipsizeMode="tail" >{props.title}</DefaultText>
        {/* </View> */}
      </View>
      <View style={styles.itemData}>
        <DefaultText style={styles.amount}>
          ${props.amount.toFixed(2)}
        </DefaultText>
        {props.delete && <TouchableCmp onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "trash" : "ios-trash"}
            size={22}
            style={{ marginRight: 20, marginLeft: 10 }}
            color="red"
          />
        </TouchableCmp>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
      width: '100%',
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontFamily: "open-sans-bold",
    color: colors.accent,
    fontSize: 16,
  },
  titleContainer: {
    //   width: '60%',
  },
  title: {
    maxWidth: 180,
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  amount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 5,
  },
  deleteButton: {
    marginLeft: 10,
  },
});

export default CartItem;
