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
    display:"flex",
    flexDirection: "row",
    justifyContent:"space-between",
    paddingRight: 50,
    margin: 20,
    marginRight:40
  },
  diet:{
    textDecorationLine: 'underline',
  },
  itemImage: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    margin:10,
    
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
            <Image style={styles.itemImage} source={item.about.itemImage} />
            <View >
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

export default DessertsList;
