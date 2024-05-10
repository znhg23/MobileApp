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

import React, { useState } from "react";
import { Stack, router } from "expo-router";
import axios from "axios";
import BASE_URL from "../../env";

import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

const EmployeeRegister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");

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
    if (!username || !password || !employeeId) {
      alert("Please fill in all fields");
      return;
    }
    const registerResponse = await axios
      .post(`${BASE_URL}/auth/register`, {
        account_name: username,
        password,
        employee_ID: employeeId,
      })
      .then(async (response) => {
        const getResponse = await axios.get(
          `${BASE_URL}/manager/getEmployee/?id=${employeeId}`
        );
        const employeeData = getResponse.data.message[0];
        router.push({
          pathname: "/create-face-model/[id]",
          params: employeeId,
        });
      })
      .catch((error) => {
        alert(error.response.data.message);
        return;
      });
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
          title: "Employee Registration",
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
            <Text style={styles.textLabel}>Username</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setUsername(text)}
              value={username}
              placeholder="Enter username"
              placeholderTextColor={"#CBD5E1"}
              paddingHorizontal={15}
              autoCapitalize="none"
              onSubmitEditing={() => {
                passwordInput.focus();
              }}
              returnKeyType="next"
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              placeholder="Enter password"
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
            <Text style={styles.textLabel}>Employee ID</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => setEmployeeId(text)}
              value={employeeId}
              placeholder="Enter Employee ID"
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
            Create Face Model
          </Text>
          <Image
            source={require("../../assets/icons/white-arrow-right.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
export default EmployeeRegister;
const styles = StyleSheet.create({
  form: {
    width: "100%",
    paddingTop: 50,
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
    columnGap: 10,
    flexDirection: "row",
    height: 50,
    width: "80%",
    backgroundColor: "#94A3B8",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
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
});
