import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function AddGoalInput({ setIsShowModal }) {
  return (
    <View style={styles.addGoalContainer}>
      <Pressable onPress={() => setIsShowModal((show) => !show)}>
        <Text style={styles.addBtn}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addGoalContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 24,
    paddingEnd: 24,
    paddingTop: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  addBtn: {
    fontSize: 32,
    color: "#rgb(34, 148, 213)",
  },
});

export default AddGoalInput;
