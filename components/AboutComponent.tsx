import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import TimingModel from "./TimingModel";

// const resturantImage = require("../assets/restaurant.jpeg");
// const logoImage = require("../assets/logoo.png");

export default function AboutComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require("../assets/restaurant.jpeg")} style={styles.resImage}>
        <Text style={styles.header}>
          <MaterialIcons name="error" size={16}/> WE ARE NOW OPEN FOR INDOOR DINING !
        </Text>
        <View style={styles.name}>
          <Image source={require("../assets/logoo.png")} style={styles.logoo} />
          <View>
            <Text style={styles.shop}>Del Ray Gourmet</Text>
            <Text style={styles.timings}>
              <Text style={styles.closed}>
                Closed
                <Entypo name="dot-single" size={15} />
              </Text>
              Opens Mon 11:00 AM
              <AntDesign name="down" onPress={() => setIsModalVisible(true)} />
            </Text>
            <Text style={styles.address}>
              123 Ave of the Roosters,Derwood MD
            </Text>
            <Text style={styles.address}>
              <AntDesign name="phone" />
              Tel: 301-555-1212
            </Text>
          </View>
        </View>
      </ImageBackground>
      {isModalVisible && (
        <TimingModel
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: -280,
    flex: 1,
  },
  resImage: {
    width: 500,
    height: 200,
  },
  logoo: {
    width: 90,
    height: 50,
    marginTop: 20,
  },
  header: {
    backgroundColor: "brown",
    paddingLeft: 40,
    color: "white",
    padding:10
  },
  name: {
    width: "70%",
    height: "50%",
    marginLeft: 20,
    marginTop: 40,
    flexDirection: "row",
    // backgroundColor: "red",
  },
  shop: {
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  timings: {
    color: "white",
    fontSize: 15,
    paddingLeft: 10,
  },
  closed: {
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    color: "white",
    paddingLeft: 10,
  },
});
