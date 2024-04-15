import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { useState } from "react";
import TimingModel from "./TimingModel";
import {
  faCircleExclamation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function AboutComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        testID="resturant-back-ground-image"
        source={require("../assets/restaurant.jpeg")}
        style={styles.resImage}
      >
        <Text style={styles.header} testID="headerText">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faCircleExclamation}
          />
          WE ARE NOW OPEN FOR INDOOR DINING !
        </Text>
        <View style={styles.name}>
          <Image
            source={require("../assets/logoo.png")}
            style={styles.logoo}
            testID="logoImage"
          />
          <View>
            <Text style={styles.shop}>Del Ray Gourmet</Text>
            <Text style={styles.timings}>
              <Text style={styles.closed}>Closed .</Text>
              <Text style={styles.innerTimings}> Opens Mon 11:00 AM</Text>
              <Pressable
                testID="downArrow"
                onPress={() => setIsModalVisible(true)}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "white" }}
                />
              </Pressable>
            </Text>
            <Text style={styles.address}>
              123 Ave of the Roosters,Derwood MD
            </Text>
            <Text style={styles.address}>
              <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
              <Text>Tel:</Text> <Text style={styles.number}>301-555-1212</Text>
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
    padding: 10,
  },
  name: {
    width: "70%",
    height: "50%",
    marginTop: 40,
    flexDirection: "row",
  },
  shop: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  timings: {
    color: "white",
    fontSize: 15,
  },
  closed: {
    fontSize: 20,
    fontWeight: "bold",
  },
  address: {
    color: "white",
  },
  number: {
    textDecorationLine: "underline",
  },
  innerTimings: {
    fontSize: 17,
  },
});
