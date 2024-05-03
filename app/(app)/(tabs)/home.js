import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";
import { Link, Stack } from "expo-router";
import ScreenHeaderBtn from "../../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../../components/common/header/NotificationBtn";
import MainFeature from "../../../components/common/MainFeature";

import { useAuth } from "../../../components/AuthContext";

const UserHome = () => {
  const { authState } = useAuth();
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_300Light,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
    IBMPlexSans_600SemiBold,
    IBMPlexSans_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return (
      <>
        <Stack.Screen options={{ headerShown: false }} />
        <ActivityIndicator size="large" color="#94A3B8" />
      </>
    );
  }

  if (authState.role === "manager") {
    return (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "white",
            },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn isTabStack={true} />,
            headerRight: () => <NotificationBtn isTabStack={true} />,
            headerTitleStyle: {
              color: "#0E305D",
              fontSize: 20,
              fontWeight: "normal",
            },
          }}
        />
        <View
          style={{
            flex: 0.85,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.welcomeText}>Hi ADMIN!</Text>
          <Text style={styles.secondWelcomeText}>Good Morning</Text>
        </View>
        <View style={styles.search}>
          <Image
            source={require("../../../assets/icons/search.png")}
            style={{
              width: 28,
              height: 28,
            }}
          />
          <Text style={styles.generalInfoText}>Search</Text>
        </View>
        <View style={styles.generalInfo}>
          <View
            style={{
              flex: 1,
              margin: 16,
              justifyContent: "space-between",
              rowGap: 8,
            }}
          >
            <Text style={styles.todayText}>Today</Text>
            <Text style={styles.timeText}>23:04:00</Text>
            <Text style={styles.dateText}>Tuesday April 23 - 2024</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Image
              source={require("../../../assets/images/welcome-image.png")}
              style={{ width: 151, height: 90 }}
            />
          </View>
        </View>
        <View style={styles.featuresContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              columnGap: 15,
            }}
          >
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/attendance-track.png")}
                feature={"Attendance Track"}
                info={"More information"}
                isAttendanceTrack={true}
                dest={"/track"}
              />
            </View>
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/dashboard.png")}
                feature={"Dashboard"}
                info={"More information"}
                isAttendanceTrack={false}
                dest={"/dashboard"}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              columnGap: 15,
            }}
          >
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/user-register.png")}
                feature={"Employee Registration"}
                info={"More information"}
                isAttendanceTrack={false}
                dest={"/otp-request"}
              />
            </View>
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/report.png")}
                feature={"Feedback"}
                info={"2 pending requests"}
                isAttendanceTrack={false}
                dest={"/report"}
              />
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "white",
            },
            headerShadowVisible: false,
            headerLeft: () => <ScreenHeaderBtn isTabStack={true} />,
            headerRight: () => <NotificationBtn isTabStack={true} />,
            headerTitleStyle: {
              color: "#0E305D",
              fontSize: 20,
              fontWeight: "normal",
            },
          }}
        />
        <View
          style={{
            flex: 0.85,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Text style={styles.welcomeText}>Hi USER!</Text>
          <Text style={styles.secondWelcomeText}>Good Morning</Text>
        </View>
        <View style={styles.notiBar}>
          <Image
            source={require("../../../assets/icons/clock.png")}
            style={{
              width: 28,
              height: 28,
            }}
          />
          <Text style={styles.generalInfoText}>
            30 minutes left to your check-in time!
          </Text>
        </View>
        <View style={styles.generalInfo}>
          <View
            style={{
              flex: 1,
              margin: 16,
              justifyContent: "space-between",
              rowGap: 8,
            }}
          >
            <Text style={styles.todayText}>Today</Text>
            <Text style={styles.timeText}>23:04:00</Text>
            <Text style={styles.dateText}>Tuesday April 23 - 2024</Text>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Image
              source={require("../../../assets/images/welcome-image.png")}
              style={{ width: 151, height: 90 }}
            />
          </View>
        </View>
        <View style={styles.featuresContainer}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              columnGap: 15,
            }}
          >
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/attendance-track.png")}
                feature={"Attendance Track"}
                info={"More information"}
                isAttendanceTrack={true}
                dest={"/track"}
              />
            </View>
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/dashboard.png")}
                feature={"Dashboard"}
                info={"More information"}
                isAttendanceTrack={false}
                dest={"/dashboard"}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              columnGap: 15,
            }}
          >
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/otp-request.png")}
                feature={"OTP Request"}
                info={"More information"}
                isAttendanceTrack={false}
                dest={"/otp-request"}
              />
            </View>
            <View style={styles.feature}>
              <MainFeature
                icon={require("../../../assets/icons/report.png")}
                feature={"Report"}
                info={"Contact manager"}
                isAttendanceTrack={false}
                dest={"/report"}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
};
export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    rowGap: 16,
    backgroundColor: "white",
  },
  search: {
    flex: 0.6875,
    backgroundColor: "#819A9F",
    opacity: 0.23,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    columnGap: 8,
  },
  notiBar: {
    flex: 0.6875,
    backgroundColor: "#819A9F",
    opacity: 0.23,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  generalInfo: {
    flex: 1.7875,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#0E305D",
    borderStyle: "solid",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  featuresContainer: {
    flex: 4.5,
    rowGap: 15,
    marginBottom: 16,
  },
  feature: { flex: 1 },

  welcomeText: {
    fontSize: 26,
    fontFamily: "IBMPlexSans_700Bold",
    color: "#0E305D",
  },
  secondWelcomeText: {
    fontSize: 18,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#94A3B8",
  },
  generalInfoText: {
    fontSize: 17,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#0E305D",
  },
  todayText: {
    fontSize: 22,
    fontFamily: "IBMPlexSans_600SemiBold",
    color: "#0E305D",
  },
  timeText: {
    fontSize: 34,
    fontFamily: "IBMPlexSans_600SemiBold",
    color: "#0E305D",
  },
  dateText: {
    fontSize: 14,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#94A3B8",
  },
});