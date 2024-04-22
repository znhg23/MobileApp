import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../components/common/header/NotificationBtn";

const Track = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  console.log("track");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "Attendance track",
          headerTitleAlign: "center",
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
    </View>
  );
};
export default Track;
const styles = StyleSheet.create({});
