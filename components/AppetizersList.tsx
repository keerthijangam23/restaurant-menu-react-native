import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Appetizers } from "../StaticData/AppetizersData";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
  },
  header: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
    color: "red",
    margin: 5,
  },
  item: {
    color: "brown",
  },
  description: {
    fontStyle: "italic",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: 350,
    height: 150,
  },
  diet: {
    textDecorationLine: "underline",
  },
  price: {
    width: 200,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  innerContainer: {
    width: 185,
  },
  caption: {
    alignSelf: "center",
    fontStyle: "italic",
    paddingBottom: 15,
  },
});

const AppetizersList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>APPETIZERS</Text>
      <Text style={styles.caption}>Our local menu changes daily</Text>
      <FlatList
        data={Appetizers}
        renderItem={({ item }) => (
          <View style={styles.menu}>
            <Image style={styles.itemImage} source={item.about.itemImage} />
            <View style={styles.innerContainer}>
              <Text style={styles.item}>{item.about.itemName}</Text>
              <Text style={styles.description}>{item.about.description}</Text>
              <Text style={styles.diet}>{item.about.Diet}</Text>
            </View>
            <Text style={styles.price}>{item.about.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AppetizersList;
