import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { MainEntrees } from "../StaticData/MainEntreesData";

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

const MainEntreesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MAIN ENTREES</Text>
      <FlatList
        data={MainEntrees}
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

export default MainEntreesList;
