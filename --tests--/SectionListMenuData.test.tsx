import { screen, render, fireEvent } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";
import SectionListMenuData from "../components/SectionListMenuData";
describe("Testing the sectionListMenuData component rendered or not", () => {
  it("Testing scrollTab rendered or not", () => {
    render(<SectionListMenuData />);
    const scrollTabText = screen.getByText("Appetizers");
    expect(scrollTabText).toBeOnTheScreen();
  });
  it("Testing Appetizers food menu rendered or not", () => {
    render(<SectionListMenuData />);
    const foodName = screen.getByText("DAY BOAT SCALLOPS");
    expect(foodName).toBeTruthy();
  });
  it("Testing MainEntrees food menu rendered or not", () => {
    render(<SectionListMenuData />);
    const complimentaryText = screen.getByText(
      "~ Add Bearnaise, Red Wine, or Bordelaise sauce for $2 extra"
    );
    expect(complimentaryText).toBeOnTheScreen();
  });
  it("Testing MainEntrees food menu rendered or not", () => {
    render(<SectionListMenuData />);
    const complimentaryText = screen.getByText(
      "foie gras, spinach, duxelles"
    );
    expect(complimentaryText).toBeOnTheScreen();
  });
});
