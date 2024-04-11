import React from "react";
import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/icons/home.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
