import React from "react";
import { Tabs, Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import { useAuth } from "../../../components/AuthContext";

import {
  useFonts,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";

export default function TabLayout() {
  const { authState } = useAuth();
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_500Medium,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../../assets/icons/home.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text
                style={{
                  fontFamily: "IBMPlexSans_500Medium",
                  fontSize: 13,
                  color: focused ? "#0E305D" : "#94A3B8",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="control-panel"
        options={{
          href: authState.role === "staff" ? null : "/control-panel",
          tabBarShowLabel: false,
          tabBarStyle: { height: 60 },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../../assets/icons/control-panel.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text
                style={{
                  fontFamily: "IBMPlexSans_500Medium",
                  fontSize: 13,
                  color: focused ? "#0E305D" : "#94A3B8",
                }}
              >
                Control Panel
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
          },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../../assets/icons/profile.png")}
                style={{ width: 25, height: 25 }}
              />
              <Text
                style={{
                  fontFamily: "IBMPlexSans_500Medium",
                  fontSize: 13,
                  color: focused ? "#0E305D" : "#94A3B8",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
