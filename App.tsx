import { ScrollView, View } from "react-native";
import AboutComponent from "./components/AboutComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AppetizersList from "./components/AppetizersList";
import MainEntreesList from "./components/MainEntreesList";
import DessertsList from "./components/DessertsList";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AboutComponent />
      <Tab.Navigator>
        <Tab.Screen name="Appetizers" component={AppetizersList} />
        <Tab.Screen name="Main Entrees" component={MainEntreesList} />
        <Tab.Screen name="Desserts" component={DessertsList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
