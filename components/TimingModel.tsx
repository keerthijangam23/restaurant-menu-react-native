import { View, Text, Modal, Button } from "react-native";
import { TimingModelStyles } from "../styles/TimingModelStyles";
type TimingModelProps = {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function TimingModel({
  isModalVisible,
  setIsModalVisible,
}: TimingModelProps) {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {
        setIsModalVisible(false);
      }}
      transparent={true}
      visible={isModalVisible}
    >
      <View style={TimingModelStyles.container}>
        <View style={TimingModelStyles.innerContainer}>
          <Text>Business Hours 301-555-1212</Text>
          <Button
            title="close"
            testID="closeButton"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
}
