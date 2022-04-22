import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    // views are like divs in react-native
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          fadeDuration={1000}
          source={require("./app/assets/Trackutane.png")}
        />
      </TouchableOpacity>
      <Button
        title="Click Me"
        color="white"
        onPress={() => console.log("button tapped")}
      ></Button>
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
