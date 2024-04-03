import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { MainEntrees } from "../StaticData/MainEntreesData";

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

  price: { flexShrink: 1, color: "rgb(133 ,77 ,14)", marginRight:-10 },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    flexShrink: 1,
    // backgroundColor: "yellow",
  },
  innerContainer: {
    flexShrink: 1,
    width: 300,
    // backgroundColor: "blue",
  },
  wrapperContainer: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    height: 100,
    // backgroundColor: "red",
  },
  complimentary: {
    color: "rgb(107,114,128)",
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
            <View style={styles.wrapperContainer}>
              <View>
                {item.about.itemImage && (
                  <Image
                    style={styles.itemImage}
                    source={item.about.itemImage}
                  />
                )}
              </View>
              <View style={styles.innerContainer}>
                <Text style={styles.item}>{item.about.itemName}</Text>
                {item.about.description ? (
                  <View>
                    <Text style={styles.description}>
                      {item.about.description}
                    </Text>
                    <Text style={styles.complimentary}>
                      {item.about.complimentary}
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.complimentary}>
                    {item.about.complimentary}
                  </Text>
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

export default MainEntreesList;
