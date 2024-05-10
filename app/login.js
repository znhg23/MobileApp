import { router } from "expo-router";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../components/AuthContext";
import {
  useFonts,
  IBMPlexSans_400Regular,
  IBMPlexSans_600SemiBold,
} from "@expo-google-fonts/ibm-plex-sans";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const result = await onLogin(username, password);
    if (result && result.error) {
      alert(result.error.response.data.message);
    } else {
      router.replace("/home");
    }
  };

  const { onLogin } = useAuth();
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_600SemiBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize="none"
        onSubmitEditing={() => {
          passwordInput.focus();
        }}
        returnKeyType="next"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="done"
        ref={(input) => {
          passwordInput = input;
        }}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 16,
  },
  button: {
    width: "80%",
    backgroundColor: "#0E305D",
    marginTop: 30,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "IBMPlexSans_600SemiBold",
    marginBottom: 5,
  },
});
