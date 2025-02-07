import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemList from "./ItemList";
import { memo } from "react";

function GoalsList({ goalsList, onRemove }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listTitle}>List of Goals</Text>
      <FlatList
        data={goalsList}
        renderItem={({ item, index }) => (
          <ItemList goal={item} index={index} onRemove={onRemove} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 8,
    padding: 16,
  },
  listTitle: {
    marginBottom: 16,
    fontSize: 24,
  },
});

export default memo(GoalsList);
