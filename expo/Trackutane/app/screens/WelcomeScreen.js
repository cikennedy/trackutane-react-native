import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";

function WelcomeScreen(props) {
  const handlePress = () => {
    console.log("text pressed");
  };

  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={require("../assets/Trackutane.png")}
    // ></ImageBackground>;
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => console.log("image tapped")}>
        <Image
          fadeDuration={1000}
          source={require("../assets/Trackutane.png")}
        />
      </TouchableOpacity>
      <Button
        title="Dolly"
        color="white"
        onPress={() => console.log("farton")}
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

export default WelcomeScreen;
