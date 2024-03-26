import { View, Text, Modal, Button, StyleSheet } from "react-native";
export default function TimingModel({ isModelVisible, setIsModalVisible }) {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {
        setIsModalVisible(false);
      }}
      transparent={true}
      visible={isModelVisible}
    >
      <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
        <View style={{ backgroundColor: "white", margin: 100 }}>
          <Text>Business Hours 301-555-1212</Text>
          <Button title="close" onPress={() => setIsModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
