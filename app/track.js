import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../components/common/header/NotificationBtn";
import AttendanceList from "../components/common/AttendanceList";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

const data = [
  {
    index: 0,
    time: "7:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    position: "Staff",
    status: "On time",
  },
  {
    index: 1,
    time: "8:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    position: "Guard",
    status: "Late in",
  },
  {
    index: 2,
    time: "9:00:00",
    employeeName: "John Doe",
    action: "Check-out",
    position: "Cleaner",
    status: "Early leave",
  },
  {
    index: 3,
    time: "10:00:00",
    employeeName: "John Doe",
    action: "Visit",
    position: "Visitor",
    status: "Other",
  },
  {
    index: 4,
    time: "11:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    position: "Staff",
    status: "On time",
  },
  {
    index: 5,
    time: "12:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    position: "Guard",
    status: "Late in",
  },
  {
    index: 6,
    time: "13:00:00",
    employeeName: "John Doe",
    action: "Check-out",
    position: "Cleaner",
    status: "Early leave",
  },
  {
    index: 7,
    time: "14:00:00",
    employeeName: "John Doe",
    action: "Visit",
    position: "Visitor",
    status: "Other",
  },
  {
    index: 8,
    time: "15:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    position: "Staff",
    status: "On time",
  },
  {
    index: 9,
    time: "16:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    position: "Guard",
    status: "Late in",
  },
];

const Track = () => {
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
  const GeneralAttendance = ({ item }) => {
    return (
      <View style={styles.attendanceContainer}>
        <View
          style={{
            width: 90,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <View style={styles.boxInfo}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.timeText}>{item.employeeName}</Text>
            {["Late in", "Early leave"].includes(item.status) ? (
              <View style={[styles.status, { backgroundColor: "#FFE1DF" }]}>
                <Text style={[styles.statusText, { color: "#ED2115" }]}>
                  {item.status}
                </Text>
              </View>
            ) : ["Other"].includes(item.status) ? (
              <View style={[styles.status, { backgroundColor: "#F7F8C5" }]}>
                <Text style={[styles.statusText, { color: "#D8B605" }]}>
                  {item.status}
                </Text>
              </View>
            ) : (
              <View style={[styles.status, { backgroundColor: "#CBFFC5" }]}>
                <Text style={[styles.statusText, { color: "#1CD919" }]}>
                  {item.status}
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/barcode.png")}
              style={{ width: 16, height: 16, marginRight: 6 }}
            />
            <Text style={styles.otherText}>{item.action}</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/briefcase.png")}
              style={{ width: 16, height: 16, marginRight: 6 }}
            />
            <Text style={[{ flex: 1 }, styles.otherText]}>{item.position}</Text>
            <Image
              source={require("../assets/icons/more-info.png")}
              style={{
                height: 18,
                width: 18,
              }}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack.Screen
        options={{
          title: "Attendance Track",
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
      <View style={styles.topContainer}></View>
      <View style={styles.bottomContainer}>
        <View style={styles.generalContainer}>
          <Text style={styles.generalText}>General</Text>
          <View style={styles.toolBar}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/icons/sort.png")}
                style={{ width: 22, height: 19 }}
              />
              <Text style={styles.toolBarText}>Sort</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/icons/filter.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text style={styles.toolBarText}>Filter</Text>
            </View>
            <View style={styles.search}>
              <Image
                source={require("../assets/icons/search.png")}
                style={{ width: 16, height: 16 }}
              />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <GeneralAttendance item={item} />}
          eyExtractor={(item) => item.id.toString()}
          style={{ width: "100%", flex: 1 }}
        />
      </View>
    </View>
  );
};
export default Track;
const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 188,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: "#E5EFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    padding: 16,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  generalContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
  },
  generalText: {
    textAlignVertical: "center",
    fontSize: 24,
    fontFamily: "IBMPlexSans_500Medium",
    color: "#0E305D",
  },
  toolBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    columnGap: 6,
  },
  toolBarText: {
    marginLeft: 4,
    fontSize: 12,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#0E305D",
  },
  search: {
    width: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "rgba(129, 154, 159, 0.23)",
  },
  searchText: {
    textAlignVertical: "center",
    paddingBottom: 2,
    marginLeft: 4,
    fontSize: 12,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#0E305D",
    opacity: 0.7,
  },
  attendanceContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  timeText: {
    fontSize: 16,
    fontFamily: "IBMPlexSans_400Regular",
    color: "black",
  },
  boxInfo: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E5EFFF",
    borderRadius: 10,
  },
  status: {
    height: 18,
    width: 68,
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statusText: {
    fontSize: 12,
    fontFamily: "IBMPlexSans_500Medium",
    textAlignVertical: "top",
  },
  otherText: {
    fontSize: 14,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#94A3B8",
  },
});
