import { StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "papayawhip",
    borderRadius: 4,
  },
  goalText: {
    color: "teal",
  },
});
