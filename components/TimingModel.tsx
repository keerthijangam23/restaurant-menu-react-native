import { View, Text, Modal, Button, StyleSheet } from "react-native";
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
      <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
        <View style={{ backgroundColor: "white", margin: 100 }}>
          <Text>Business Hours 301-555-1212</Text>
          <Button title="close" testID="closeButton" onPress={() => setIsModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
