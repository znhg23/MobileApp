import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
import DateSwiper from "../../components/common/DateSwiper";

const OtpRequest = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack.Screen
        options={{
          title: "Feedback",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#94A3B8",
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
      <DateSwiper
      />
    </View>
  );
};

export default OtpRequest;
