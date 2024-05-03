import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
const Dashboard = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Dashboard",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#E5EFFF",
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
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
