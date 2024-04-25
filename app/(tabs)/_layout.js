import React from "react";
import { Tabs, Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
import {
  useFonts,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";

export default function TabLayout() {
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
                source={require("../../assets/icons/home.png")}
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
          tabBarShowLabel: false,
          tabBarStyle: { height: 60 },
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../../assets/icons/control-panel.png")}
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
                source={require("../../assets/icons/profile.png")}
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
