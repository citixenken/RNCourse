import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ff1234" }}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "papayawhip",
    borderRadius: 4,
  },
  goalText: {
    color: "teal",
    padding: 8,
  },
});
