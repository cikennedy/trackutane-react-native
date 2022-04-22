import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    // views are like divs in react-native
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Dolly Farton
      </Text>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          fadeDuration={1000}
          source={require("./assets/Trackutane.png")}
        />
      </TouchableOpacity>
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
