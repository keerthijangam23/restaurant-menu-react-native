
import { screen, render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import AboutComponent from "../components/AboutComponent";
import "@testing-library/react-native/extend-expect";

describe("checking wheather AboutComponent is present or not", () => {
  it("checking resturant image rendered or not", () => {
    render(
      <NavigationContainer>
        <AboutComponent />
      </NavigationContainer>
    );
    const restaurantImage = screen.getByTestId("resturant-back-ground-image");
    expect(restaurantImage).toBeDefined();
  });
  it("Checking header rendering or not", () => {
    render(
      <NavigationContainer>
        <AboutComponent />
      </NavigationContainer>
    );
    const headerText = screen.getByTestId("headerText");
    expect(headerText).toBeDefined();
  });
  it("Checking logo rendering or not", () => {
    render(
      <NavigationContainer>
        <AboutComponent />
      </NavigationContainer>
    );
    const logoImage = screen.getByTestId("logoImage");
    expect(logoImage).toBeDefined();
  });
  it("Checking restaurant name rendering or not", () => {
    render(
      <NavigationContainer>
        <AboutComponent />
      </NavigationContainer>
    );
    const restaurantName = screen.getByText("Del Ray Gourmet");
    expect(restaurantName).toBeDefined();
  });
  it("Checking down arrow rendering or not", () => {
    const { getByText } = render(
      <NavigationContainer>
        <AboutComponent />
      </NavigationContainer>
    );
    const downArrow = screen.getByTestId("downArrow");
    fireEvent.press(downArrow);
    expect(getByText("Business Hours 301-555-1212")).toBeDefined();
  });
});
