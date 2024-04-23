import { ScrollView, View } from "react-native";
import AboutComponent from "./AboutComponent";
import SectionListMenuData from "./SectionListMenuData";
import { DashboardStyles } from "../styles/DashboardStyles";
export default function Dashboard() {
  return (
    <View style={DashboardStyles.container}>
      <AboutComponent />
      <SectionListMenuData />
    </View>
  );
}

