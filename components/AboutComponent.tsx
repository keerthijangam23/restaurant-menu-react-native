import { Text, View, Image, ImageBackground, Pressable } from "react-native";
import { useState } from "react";
import TimingModel from "./TimingModel";
import {
  faCircleExclamation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { AboutComponentStyles } from "../styles/AboutComponentStyles";
export default function AboutComponent() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <View>
      <ImageBackground
        testID="resturant-back-ground-image"
        source={require("../assets/restaurant.jpeg")}
        style={AboutComponentStyles.resImage}
      >
        <Text style={AboutComponentStyles.header} testID="headerText">
          <FontAwesomeIcon
            style={AboutComponentStyles.icon}
            icon={faCircleExclamation}
          />
          WE ARE NOW OPEN FOR INDOOR DINING !
        </Text>
        <View style={AboutComponentStyles.name}>
          <Image
            source={require("../assets/logoo.png")}
            style={AboutComponentStyles.logoo}
            testID="logoImage"
          />
          <View>
            <Text style={AboutComponentStyles.shop}>Del Ray Gourmet</Text>
            <Text style={AboutComponentStyles.timings}>
              <Text style={AboutComponentStyles.closed}>Closed .</Text>
              <Text style={AboutComponentStyles.innerTimings}>
                {" "}
                Opens Mon 11:00 AM
              </Text>
              <Pressable
                testID="downArrow"
                onPress={() => setIsModalVisible(true)}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={AboutComponentStyles.icon}
                />
              </Pressable>
            </Text>
            <Text style={AboutComponentStyles.address}>
              123 Ave of the Roosters,Derwood MD
            </Text>
            <Text style={AboutComponentStyles.address}>
              <FontAwesomeIcon
                icon={faPhone}
                style={AboutComponentStyles.icon}
              />
              <Text>Tel:</Text>{" "}
              <Text style={AboutComponentStyles.number}>301-555-1212</Text>
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
    </View>
  );
}
