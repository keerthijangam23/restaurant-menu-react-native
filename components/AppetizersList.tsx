import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Appetizers } from "../StaticData/AppetizersData";
import { useFonts } from "expo-font";

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
  caption: {
    alignSelf: "center",
    marginBottom: 10,
    fontStyle: "italic",
  },
  item: {
    // color: "rgb(133 ,77 ,14)",
  },
  description: {
    fontStyle: "italic",
    // fontFamily:"Arizonia-Regular"
  },
  menu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexShrink: 1,
    // backgroundColor: "pink",
    marginBottom: 20,
    width: 350,
    height: 90,
  },
  diet: {
    textDecorationLine: "underline",
    color:"rgb(107,114,128)"
  },
  price: { flexShrink: 1, color: "rgb(133 ,77 ,14)",  marginRight:-10},
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

const AppetizersList = () => {
  // const [fontsLoaded] = useFonts({"Arizonia-Regular":require("./assets/fonts/Arizonia-Regular.ttf")})
  // if(!fontsLoaded){
  //   return undefined
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>APPETIZERS</Text>
      <Text style={styles.caption}>Our local menu changes daily</Text>
      <FlatList
        data={Appetizers}
        renderItem={({ item }) => (
          <View style={styles.menu}>
            <View style={styles.wrapperContainer}>
              <View style={styles.innerContainer}>
                {item.about.newImage ? (
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Image
                      source={item.about.newImage}
                      style={{ width: 10, height: 10, marginTop: 5 }}
                    />
                    <Text style={styles.item}>{item.about.itemName}</Text>
                  </View>
                ) : (
                  <Text style={styles.item}>{item.about.itemName}</Text>
                )}
                <Text style={styles.description}>{item.about.description}</Text>
                {item.about.Diet ? (
                  <Text style={styles.diet}>{item.about.Diet}</Text>
                ) : (
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

export default AppetizersList;
