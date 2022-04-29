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
  return <WelcomeScreen />;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: "dodgerblue",
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
