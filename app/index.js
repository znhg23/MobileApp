import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import UserHome from "../screens/UserHome";
const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <UserHome />
        <View style={{ height: 60 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
