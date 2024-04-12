import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainEntreesList from "../components/MainEntreesList";

describe("checking MainEntreesList  rendered or not", () => {
  it("checking Main Entrees header rendered or not", () => {
    render(
      <NavigationContainer>
        <MainEntreesList/>
      </NavigationContainer>
    );
    const headerLine = screen.getByText("MAIN ENTREES");
    expect(headerLine).toBeDefined();
  });

  it("checking MainEntrees flatlist  rendered or not", () => {
    render(
        <NavigationContainer>
        <MainEntreesList/>
      </NavigationContainer>
    );
    const menuContainer = screen.getAllByTestId("menuContainer");
    expect(menuContainer).toBeDefined();
  });
  it("checking mainentrees 1st list item rendered or not", () => {
    render(
        <NavigationContainer>
        <MainEntreesList/>
      </NavigationContainer>
    );
    const wrapperContainer = screen.getAllByTestId("wrapperContainer");
    expect(wrapperContainer).toBeDefined();
  });
  it("checking mainEntrees price item rendered or not", () => {
    render(
        <NavigationContainer>
        <MainEntreesList/>
      </NavigationContainer>
    );
    const price = screen.getAllByTestId("price");
    expect(price).toBeDefined();
  });
});
