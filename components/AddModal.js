import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function AddModal({ isShowModal, setIsShowModal, text, setText, onAddGoal }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShowModal}
      onRequestClose={() => {
        setIsShowModal(!isShowModal);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              value={text}
              onChangeText={setText}
              placeholder="Your course goal"
              multiline
            />
          </View>
          <View style={styles.buttons}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgba(212, 235, 248, .5)" : "#ccc",
                },
                styles.optionsBtn,
              ]}
              onPress={() => {
                if (!text) {
                  Alert.alert("empty goal");
                } else {
                  onAddGoal();
                  setIsShowModal(!isShowModal);
                }
              }}
            >
              <Text>Confirm</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgba(212, 235, 248, .5)" : "#ccc",
                },
                styles.optionsBtn,
              ]}
              onPress={() => setIsShowModal(!isShowModal)}
            >
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    height: "auto",
    width: "90%",
    margin: 8,
    backgroundColor: "#ccc",
    padding: 24,
  },
  inputView: {
    flex: "auto",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  optionsBtn: {
    padding: 16,
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
  },
});

export default AddModal;
