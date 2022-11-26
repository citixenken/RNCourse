import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello there, @citixenken!</Text>
      </View>
      <Text style={styles.text}>Welcome to this RN Primer Course!</Text>
      <Button title="Get Started!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 18,
    borderWidth: 4,
    borderColor: "teal",
    padding: 18,
    borderRadius: 32,
  },
});
