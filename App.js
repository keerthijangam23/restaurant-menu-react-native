import { ScrollView } from "react-native";
import AboutComponent from "./components/AboutComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <ScrollView>
      <AboutComponent />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Appetizers" />
          <Tab.Screen name="Main Entrees"/>
          <Tab.Screen name="Desserts"/>
        </Tab.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
}
