import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";
import { router } from "expo-router";

const MainFeature = ({ icon, feature, info, isAttendanceTrack, dest }) => {
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_300Light,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Pressable
      style={
        isAttendanceTrack
          ? [styles.featureContainer, { backgroundColor: "#0E305D" }]
          : styles.featureContainer
      }
      onPress={() => {
        router.push(dest);
      }}
    >
      <View
        style={{
          height: 47,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={icon} style={{ width: 47, height: 47 }} />
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          <Image
            source={
              isAttendanceTrack
                ? require("../../assets/icons/three-dots.png")
                : require("../../assets/icons/three-dots-dark.png")
            }
            style={{ width: 4, height: 16 }}
          />
        </Pressable>
      </View>

      <Text
        style={{
          color: isAttendanceTrack ? "white" : "#0E305D",
          fontSize: 18,
          fontFamily: "IBMPlexSans_500Medium",
          width: "80%",
          lineHeight: 26,
          marginTop: 10,
          marginBottom: 6,
        }}
      >
        {feature}
      </Text>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 18 }}>
        <Text
          style={{
            color: "#94A3B8",
            fontSize: 14,
            fontFamily: "IBMPlexSans_300Light",
          }}
        >
          {info}
        </Text>
      </View>
    </Pressable>
  );
};
export default MainFeature;

const styles = StyleSheet.create({
  featureContainer: {
    flex: 1,
    borderRadius: 27,
    backgroundColor: "#EAF2FF",
    padding: 14,
  },
});
