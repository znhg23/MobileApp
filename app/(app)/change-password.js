import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import React, { useState, useEffect } from "react";
import { Stack, router } from "expo-router";
import axios from "axios";
import BASE_URL from "../../env";
import SuccessModal from "../../components/common/SuccessModal";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

const ChangePassword = () => {
  //const response = await axios.get(`${BASE_URL}/manager/getEmployee/?id=${id}`);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

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
        <Stack.Screen options={{ headerShown: false }} />
        <ActivityIndicator size="large" color="#94A3B8" />
      </>
    );
  }

  const handleSubmit = async () => {
    if (!password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const response = await axios
      .patch(`${BASE_URL}/user/changePassword`, {
        password,
      })
      .then((response) => {
        setShowModal(true);
      })
      .catch((error) => {
        alert(error.response.data.message);
        return;
      });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Change password",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerBackVisible: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "IBMPlexSans_500Medium",
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <Image
        source={require("../../assets/images/change-password.jpg")}
        style={styles.image}
      />
      <KeyboardAvoidingView
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        behavior="padding"
      >
        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Create new password"
              placeholderTextColor={"#CBD5E1"}
              paddingHorizontal={15}
              autoCapitalize="none"
              onSubmitEditing={() => {
                employeeIdInput.focus();
              }}
              returnKeyType="next"
              ref={(input) => {
                passwordInput = input;
              }}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              placeholder="Confirm new password"
              secureTextEntry={true}
              placeholderTextColor={"#CBD5E1"}
              paddingHorizontal={15}
              autoCapitalize="none"
              returnKeyType="done"
              ref={(input) => {
                employeeIdInput = input;
              }}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text
            style={{
              fontFamily: "IBMPlexSans_600SemiBold",
              fontSize: 20,
              color: "white",
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Change Password
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <SuccessModal visible={showModal} closeModal={handleCloseModal} />
    </View>
  );
};
export default ChangePassword;
const styles = StyleSheet.create({
  form: {
    width: "100%",
    marginVertical: 16,
    paddingHorizontal: 40,
    justifyContent: "flex-start",
    alignItems: "center",
    rowGap: 16,
  },
  textLabel: {
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 16,
    color: "#0E305D",
  },
  input: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 6,
  },
  textInput: {
    width: "100%",
    height: 50,
    borderColor: "#CBD5E1",
    borderWidth: 1,
    borderRadius: 15,
  },
  submitButton: {
    flexDirection: "row",
    height: 50,
    width: "80%",
    backgroundColor: "#94A3B8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  uploadBtn: {
    width: 165,
    height: 165,
    borderRadius: 82.5,
    backgroundColor: "#CBD5E1",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 300,
  },
});
