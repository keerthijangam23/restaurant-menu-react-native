import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { MenuData } from "../StaticData/MenuData";
import SectionList from "react-native-tabs-section-list/lib/SectionList";
export default function SectionListMenuData() {
  return (
    <SectionList
      sections={MenuData}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {item.type !== "APPETIZERS" && item.itemImage ? (
            <Image style={styles.itemImage} source={item.itemImage} />
          ) : null}

          <View style={styles.innerContainer}>
            <Text style={styles.itemName}>{item.itemName}</Text>
            {item.description ? (
              <Text style={styles.description}>{item.description}</Text>
            ) : null}
            {item.type == "APPETIZERS" && item.Diet ? (
              <Text style={styles.diet}>{item.Diet}</Text>
            ) : null}
            {item.complimentary ? (
              <Text style={styles.complimentary}>{item.complimentary}</Text>
            ) : null}
          </View>

          <Text style={styles.price}>{item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View>
          <Text style={styles.FoodTitle}>{section.title.toUpperCase()}</Text>
          {section.title == "Appetizers" ? (
            <Text style={styles.caption}>Our local menu changes daily</Text>
          ) : null}
        </View>
      )}
      keyExtractor={(item) => item.itemName}
      stickySectionHeadersEnabled={false}
      scrollToLocationOffset={50}
      tabBarStyle={styles.tabBar}
      renderTab={({ title, isActive }) => (
        <View
          style={[styles.tabContainer, { borderBottomWidth: isActive ? 1 : 0 }]}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: isActive ? "rgb(239 68 68)" : "black",
                backgroundColor: isActive ? "rgb(254 242 242)" : "white",
              },
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  // container: {
  //   width: 380,
  //   flex: 1,
  // },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexShrink: 1,
    marginBottom: 20,
    Width: 400,
    height: 90,
    margin: 10,
    // backgroundColor: "pink",
  },
  itemName: {
    color: "rgb(133 ,77 ,14)",
  },
  FoodTitle: {
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
  itemImage: {
    width: 100,
    height: 90,
    marginRight: 10,
    borderRadius: 10,
    flexShrink: 1,
  },
  diet: {
    textDecorationLine: "underline",
    color: "rgb(107,114,128)",
  },
  price: {
    width: 45,
    flexShrink: 1,
    textAlign: "right",
    color: "rgb(133 ,77 ,14)",
    marginRight: 20,
  },
  innerContainer: {
    flexShrink: 1,
    width: 280,
    // backgroundColor: "blue",
  },
  tabBar: {
    backgroundColor: "#fff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  tabContainer: {
    borderBottomColor: "rgb(239 68 68)",
  },
  tabText: {
    padding: 15,
    color: "#9e9e9e",
    fontSize: 18,
    fontWeight: "400",
  },
  complimentary: {
    color: "rgb(107, 114, 128)",
  },
  description: {
    fontStyle: "italic",
  },
});
