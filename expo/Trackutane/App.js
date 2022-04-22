import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function App() {
  console.log("App executed.");

  return (
    // views are like divs in react-native
    <SafeAreaView style={styles.container}>
      <Text>Dolly Farton</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
