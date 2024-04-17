import { screen, render, fireEvent } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";
import AboutComponent from "../components/AboutComponent";
import SectionListMenuData from "../components/SectionListMenuData";
describe("checking wheather AboutComponent and SectionListMenuData are renderedor not", () => {
    it("checking resturant image rendered or not", () => {
      render(<AboutComponent />);
      const restaurantImage = screen.getByTestId("resturant-back-ground-image");
      expect(restaurantImage).toBeDefined();
    });
    it("Testing Appetizers food menu rendered or not", () => {
        render(<SectionListMenuData />);
        const foodName = screen.getByText("DAY BOAT SCALLOPS");
        expect(foodName).toBeTruthy();
      });
})
