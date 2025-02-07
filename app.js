import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import AddGoalInput from "./components/AddGoalInput";
import GoalsList from "./components/GoalsList";
import AddModal from "./components/AddModal";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [text, setText] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);

  function handleAddGoal() {
    setGoalsList((goalsList) => [...goalsList, text]);
    setText("");
  }

  function handleRemoveItem(index) {
    setGoalsList((goalsList) => goalsList.filter((_, i) => i !== index));
  }

  return (
    <ImageBackground resizeMode="cover" style={styles.appContainer}>
      <AddGoalInput setIsShowModal={setIsShowModal} />
      <GoalsList goalsList={goalsList} onRemove={handleRemoveItem} />
      <AddModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        onAddGoal={handleAddGoal}
        text={text}
        setText={setText}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
});
