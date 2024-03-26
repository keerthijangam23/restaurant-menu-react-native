import React from "react";
import { FlatList, StyleSheet, Text, View,Image } from "react-native";
import { MainEntrees } from "../StaticData/MainEntreesData";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const MainEntreesList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={MainEntrees}
        renderItem={({item}) => <View><Text style={styles.item}>{item.about.item}</Text>
    <Text>{item.about.description}</Text>
    <Image source={item.about.itemImage}/></View>}
      />
    </View>
  );
};

export default MainEntreesList;
