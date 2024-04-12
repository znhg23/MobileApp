import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../components/common/header/NotificationBtn";
import DateSwiper from "../components/common/DateSwiper";

export default function Track() {
  const [selectedDate, setSelectedDate] = useState({
    day: 1,
    dayOfWeek: "Sun",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Do something with the selected date
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      <Text style={{ fontSize: 24 }}>
        Selected Date: {selectedDate.day} {selectedDate.dayOfWeek}
      </Text>
      <DateSwiper initialDate={selectedDate} onDateChange={handleDateChange} />
    </View>
  );
}

const styles = StyleSheet.create({});
