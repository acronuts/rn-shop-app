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
        <DefaultText style={styles.title}>{props.title}</DefaultText>
      </View>
      <View style={styles.itemData}>
        <DefaultText style={styles.amount}>
          ${props.amount.toFixed(2)}
        </DefaultText>
        <TouchableCmp onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === "android" ? "trash" : "ios-trash"}
            size={23}
            style={{ marginLeft: 20 }}
            color="red"
          />
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
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
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  amount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  deleteButton: {
    marginLeft: 20,
  },
});

export default CartItem;
