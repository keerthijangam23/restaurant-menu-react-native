import { StyleSheet } from "react-native";

 export const SectionListMenuDataStyles = StyleSheet.create({
    card: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      flexShrink: 1,
      marginBottom: 20,
      Width: 400,
      height: 90,
      margin: 10,
    },
    itemName: {
      color: "rgb(133 ,77 ,14)",
    },
    foodTitle: {
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
      fontFamily: "serif",
    },
    newImage: {
      width: 20,
      height: 10,
      marginTop: 5,
    },
    newImageFoodnameConatiner: {
      display: "flex",
      flexDirection: "row",
    },
  });
  