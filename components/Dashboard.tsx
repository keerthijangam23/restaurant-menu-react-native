import { ScrollView, View,StyleSheet } from "react-native";
import AboutComponent from "./AboutComponent";
import SectionListMenuData from "./SectionListMenuData";
export default function Dashboard() {
  return (
    <View style={styles.container}>
      <AboutComponent />
      <SectionListMenuData />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flex: 1,
      },
})
