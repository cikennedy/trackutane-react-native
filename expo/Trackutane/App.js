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
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    <WelcomeScreen />
    // views are like divs in react-native
    // <SafeAreaView style={styles.container}>
    //   <TouchableOpacity onPress={() => console.log("image tapped")}>
    //     <Image
    //       fadeDuration={1000}
    //       source={require("./app/assets/Trackutane.png")}
    //     />
    //   </TouchableOpacity>
    //   <Button
    //     title="Dolly"
    //     color="white"
    //     onPress={() => console.log("farton")}
    //   ></Button>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
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
