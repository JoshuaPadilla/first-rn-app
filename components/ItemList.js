import { Button, Pressable, StyleSheet, Text, View } from "react-native";

function ItemList({ goal, index, onRemove }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{`${index + 1}) ${goal}`}</Text>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#123" : "#ccc" },
          styles.removeBtn,
        ]}
        title="remove"
        onPress={() => onRemove(index)}
      >
        <Text>remove</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 6,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  removeBtn: {
    padding: 8,
    borderRadius: 8,
  },
  listText: {
    maxWidth: "70%",
  },
  pressed: {
    backgroundColor: "black",
  },
});

export default ItemList;
