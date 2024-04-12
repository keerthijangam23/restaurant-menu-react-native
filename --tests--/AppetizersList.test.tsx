import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppetizersList from "../components/AppetizersList";


describe("checking appetizersList rendered or not", () => {
  it("checking appetizers header rendered or not", () => {
    render(
      <NavigationContainer>
        <AppetizersList/>
      </NavigationContainer>
    );
    const headerLine = screen.getByText("APPETIZERS")
    expect(headerLine).toBeDefined();
  });
  it("checking appetizers caption rendered or not", () => {
    render(
      <NavigationContainer>
        <AppetizersList/>
      </NavigationContainer>
    );
    const headerLine = screen.getByText("Our local menu changes daily")
    expect(headerLine).toBeDefined();
  });
  it("checking appetizers flatlist  rendered or not", () => {
    render(
      <NavigationContainer>
        <AppetizersList/>
      </NavigationContainer>
    );
    const menuContainer = screen.getAllByTestId("menuContainer")
    expect(menuContainer).toBeDefined();
  });
  it("checking appetizers 1st list item rendered or not", () => {
    render(
      <NavigationContainer>
        <AppetizersList/>
      </NavigationContainer>
    );
    const innerContainer = screen.getAllByTestId("innerContainer")
    expect(innerContainer).toBeDefined();
  });
  it("checking appetizers price item rendered or not", () => {
    render(
      <NavigationContainer>
        <AppetizersList/>
      </NavigationContainer>
    );
    const price = screen.getAllByTestId("price")
    expect(price).toBeDefined();
  });
});
