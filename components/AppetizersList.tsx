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
    marginTop: 10,
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
    paddingRight: 60,
    marginBottom: 20,
    marginRight: 60,
  },
  caption: {
    alignSelf: "center",
    fontStyle: "italic",
    paddingBottom: 10,
  },
  diet: {
    textDecorationLine: "underline",
  },
  itemImage: {
    width: 60,
    height: 60,

    margin: 10,
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
            <View>
              <Text style={styles.item}>{item.about.itemName}</Text>
              <Text style={styles.description}>{item.about.description}</Text>
              <Text style={styles.diet}>{item.about.Diet}</Text>
            </View>
            <Text>{item.about.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AppetizersList;
