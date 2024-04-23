import React from "react";
import { Text, View, Image } from "react-native";
import { MenuData } from "../StaticData/MenuData";
import SectionList from "react-native-tabs-section-list/lib/SectionList";
import { SectionListMenuDataStyles } from "../styles/SectionListMenuDataStyles";
export default function SectionListMenuData() {
  return (
    <SectionList
      sections={MenuData}
      renderItem={({ item }) => (
        <View style={SectionListMenuDataStyles.card}>
          {item.type !== "APPETIZERS" && item.itemImage ? (
            <Image
              style={SectionListMenuDataStyles.itemImage}
              source={item.itemImage}
            />
          ) : null}

          <View style={SectionListMenuDataStyles.innerContainer}>
            <View style={SectionListMenuDataStyles.newImageFoodnameConatiner}>
              {item.newImage ? (
                <Image
                  style={SectionListMenuDataStyles.newImage}
                  source={item.newImage}
                />
              ) : null}
              <Text style={SectionListMenuDataStyles.itemName}>
                {item.itemName}
              </Text>
            </View>
            {item.description ? (
              <Text style={SectionListMenuDataStyles.description}>
                {item.description}
              </Text>
            ) : null}
            {item.type == "APPETIZERS" && item.Diet ? (
              <Text style={SectionListMenuDataStyles.diet}>{item.Diet}</Text>
            ) : null}
            {item.complimentary ? (
              <Text style={SectionListMenuDataStyles.complimentary}>
                {item.complimentary}
              </Text>
            ) : null}
          </View>

          <Text style={SectionListMenuDataStyles.price}>{item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View>
          <Text style={SectionListMenuDataStyles.foodTitle}>
            {section.title.toUpperCase()}
          </Text>
          {section.title == "Appetizers" ? (
            <Text style={SectionListMenuDataStyles.caption}>
              Our local menu changes daily
            </Text>
          ) : null}
        </View>
      )}
      keyExtractor={(item) => item.itemName}
      stickySectionHeadersEnabled={false}
      scrollToLocationOffset={50}
      tabBarStyle={SectionListMenuDataStyles.tabBar}
      renderTab={({ title, isActive }) => (
        <View
          style={[
            SectionListMenuDataStyles.tabContainer,
            { borderBottomWidth: isActive ? 1 : 0 },
          ]}
        >
          <Text
            style={[
              SectionListMenuDataStyles.tabText,
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
