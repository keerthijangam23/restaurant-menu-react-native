import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import DessertsList from "../components/DessertsList";

describe("checking DessertsList rendered or not", () => {
  it("checking Desserts header rendered or not", () => {
    render(
      <NavigationContainer>
        <DessertsList />
      </NavigationContainer>
    );
    const headerLine = screen.getByText("DESSERTS");
    expect(headerLine).toBeDefined();
  });

  it("checking Desserts flatlist  rendered or not", () => {
    render(
      <NavigationContainer>
        <DessertsList />
      </NavigationContainer>
    );
    const menuContainer = screen.getAllByTestId("menuContainer");
    expect(menuContainer).toBeDefined();
  });
  it("checking Desserts 1st list item rendered or not", () => {
    render(
      <NavigationContainer>
        <DessertsList />
      </NavigationContainer>
    );
    const wrapperContainer = screen.getAllByTestId("wrapperContainer");
    expect(wrapperContainer).toBeDefined();
  });
  it("checking Desserts price item rendered or not", () => {
    render(
      <NavigationContainer>
        <DessertsList />
      </NavigationContainer>
    );
    const price = screen.getAllByTestId("price");
    expect(price).toBeDefined();
  });
});
