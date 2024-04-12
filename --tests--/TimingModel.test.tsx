import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import TimingModel from "../components/TimingModel";

describe("checking wheather TimingModel is present or not", () => {
  const setIsModalVisible = jest.fn();
  it("checking model pop rendered or not on clicking", () => {
    render(
      <TimingModel
        isModalVisible={true}
        setIsModalVisible={setIsModalVisible}
      />
    );
    const timingText = screen.getByText("Business Hours 301-555-1212")
    expect(timingText).toBeDefined();
  });
});
