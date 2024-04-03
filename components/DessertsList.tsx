import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Desserts } from "../StaticData/DesssertsData";

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
    margin: 10,
  },
  item: {
    color: "rgb(133 ,77 ,14)",
   
  },
  description: {
    fontStyle: "italic",
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexShrink: 1,
    // backgroundColor: "pink",
    marginBottom: 20,
    width: 350,
    height: 100,
  },
  diet: {
    textDecorationLine: "underline",
  },
  price: { flexShrink: 1 ,color: "rgb(133 ,77 ,14)",marginRight:-10},
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    flexShrink: 1,
  },
  innerContainer: {
    flexShrink: 1,
    width: 300,
  },
  wrapperContainer: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 100,
  },
  complimentary:{
    color:"rgb(107,114,128)"
  }
});

const DessertsList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>DESSERTS</Text>
      <FlatList
        data={Desserts}
        renderItem={({ item }) => (
          <View style={styles.menu}>
            <View style={styles.wrapperContainer}>
              <View style={{}}>
                {item.about.itemImage && (
                  <Image
                    style={styles.itemImage}
                    source={item.about.itemImage}
                  />
                )}
              </View>
              <View style={styles.innerContainer}>
                <Text style={styles.item}>{item.about.itemName}</Text>
                <Text style={styles.description}>{item.about.description}</Text>
                {item.about.complimentary && (
                  <Text style={styles.complimentary}>{item.about.complimentary}</Text>
                )}
              </View>
              <View>
                <Text style={styles.price}>{item.about.price}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default  DessertsList;
