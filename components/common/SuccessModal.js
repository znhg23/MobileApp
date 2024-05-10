import React from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";
const SuccessModal = ({ visible, closeModal }) => {
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_300Light,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return (
      <>
        <ActivityIndicator size="large" color="#94A3B8" />
      </>
    );
  }
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={require("../../assets/images/success.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text style={styles.modalText}>Password Changed!</Text>
          <Text style={styles.infoText}>
            Your password has been changed succesfully
          </Text>
          <TouchableOpacity
            onPress={() => {
              router.replace("home");
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    rowGap: 20,
  },
  modalText: {
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 20,
    textAlign: "center",
  },
  infoText: {
    paddingHorizontal: 20,
    fontFamily: "IBMPlexSans_300Light",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#CCDDF3",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: "IBMPlexSans_500Medium",
    fontSize: 16,
    color: "#0E305D",
    marginBottom: 5,
  },
});

export default SuccessModal;
