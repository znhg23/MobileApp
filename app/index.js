import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  NotificationBtn,
  Welcome,
} from "../components"; // change and implements these methods to match our app features
import UserHome from "../screens/UserHome";
const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          title: "Home",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn />,
          headerRight: () => <NotificationBtn />,
          headerTitleStyle: {
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />

      <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <UserHome />
        <View style={{ height: 60 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
