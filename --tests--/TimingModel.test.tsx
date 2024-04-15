
import { render, fireEvent } from "@testing-library/react-native";
import TimingModel from "../components/TimingModel";

describe("TimingModel", () => {
  test("renders modal with correct text and button", () => {
    const { getByText, getByTestId } = render(
      <TimingModel isModalVisible={true} setIsModalVisible={() => {}} />
    );
    expect(getByText("Business Hours 301-555-1212")).toBeTruthy();
  });

  test("closes modal when close button is pressed", () => {
    const setIsModalVisible = jest.fn();
    const { getByTestId } = render(
      <TimingModel
        isModalVisible={true}
        setIsModalVisible={setIsModalVisible}
      />
    );
    fireEvent.press(getByTestId("closeButton"));
    expect(setIsModalVisible).toHaveBeenCalledWith(false);
  });
});
