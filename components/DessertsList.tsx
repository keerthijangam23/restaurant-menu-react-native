import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Desserts } from "../StaticData/DesssertsData";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flex:1
  },
  header: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
    color: "red",
    margin: 10,
  },
  item: {
    color: "brown",
  },
  description: {
    fontStyle: "italic",
  },
  menu: {
    flexWrap: "wrap",
    flexDirection: "column",
  },
});

const DessertsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DESSERTS</Text>
      <FlatList
        data={Desserts}
        renderItem={({ item }) => (
          <View style={styles.menu}>
            <View>
              <Text style={styles.item}>{item.about.itemName}</Text>
              <Text style={styles.description}>{item.about.description}</Text>
              <Text>{item.about.Diet}</Text>
            </View>
            <Text>{item.about.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DessertsList;
