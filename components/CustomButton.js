// screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton"; // Adjust the path as necessary

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
          style={styles.customButton}
          textStyle={styles.customButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
  customButton: {
    backgroundColor: "#28a745", // Example of custom button background color
  },
  customButtonText: {
    fontSize: 18, // Example of custom button text size
  },
});

export default HomeScreen;
