import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { Stack, Tabs } from "expo-router";
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

const OtpRequest = () => {
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
  const requestOTP = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/user/createOtp`);
      alert("Your OTP is: " + response.data.message);
    } catch (error) {
      alert(error.response.data.message || "An error occurred");
    }
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
          title: "OTP Request",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "IBMPlexSans_500Medium",
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <View style={styles.container}>
        <Text style={styles.warningText}>
          This feature is only for emergencies!
        </Text>
        <Text style={styles.normalText}>Do you want to proceed?</Text>
        <TouchableOpacity style={styles.btn} onPress={requestOTP}>
          <Text style={styles.yesText}>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtpRequest;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
  },
  warningText: {
    fontFamily: "IBMPlexSans_600SemiBold",
    fontSize: 20,
    color: "#ED2115",
  },
  normalText: {
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 20,
    color: "black",
  },
  btn: {
    backgroundColor: "#94A3B8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  yesText: {
    fontFamily: "IBMPlexSans_500Medium",
    fontSize: 20,
    color: "white",
  },
});
