import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import ScreenHeaderBtn from "../../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../../components/common/header/NotificationBtn";
import { router } from "expo-router";
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
    employeeID: 1,
    action: "Check-in",
    position: "Staff",
    status: "On time",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 1,
    time: "8:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Check-in",
    position: "Guard",
    status: "Late in",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 2,
    time: "9:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Check-out",
    position: "Cleaner",
    status: "Early leave",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 3,
    time: "10:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Visit",
    position: "Visitor",
    status: "Other",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 4,
    time: "11:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Check-in",
    position: "Staff",
    status: "On time",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 5,
    time: "12:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Check-in",
    position: "Guard",
    status: "Late in",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 6,
    time: "13:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Check-out",
    position: "Cleaner",
    status: "Early leave",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 7,
    time: "14:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Visit",
    position: "Visitor",
    status: "Other",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 8,
    time: "15:00:00",
    employeeName: "John Doe",
    action: "Check-in",
    employeeID: 1,
    position: "Staff",
    status: "On time",
    date: "Tuesday, April 23, 2024",
  },
  {
    index: 9,
    time: "16:00:00",
    employeeName: "John Doe",
    employeeID: 1,
    action: "Check-in",
    position: "Guard",
    status: "Late in",
    date: "Tuesday, April 23, 2024",
  },
];

const AttendanceDetails = () => {
  const { id } = useLocalSearchParams();

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

  const goToProfile = (employeeID) => {
    router.push({
      pathname: "/employee-details/[id]",
      params: { id: employeeID },
    });
  };
  const attendanceData = data[id];
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
          headerShown: true,
          title: "Attendance Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#E5EFFF",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontFamily: "IBMPlexSans_500Medium",
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <View style={styles.topContainer}>
        <View
          style={{
            width: "100%",
            height: 194,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={require("../../../assets/icons/trash.png")}
            style={{ width: 28, height: 28 }}
          />
          <View style={styles.scan}>
            <Image
              source={require("../../../assets/icons/scan-avatar.png")}
              style={{ width: 123, height: 123 }}
            />
          </View>
          <Image
            source={require("../../../assets/icons/edit.png")}
            style={{ width: 28, height: 28 }}
          />
        </View>
        <View style={styles.generalInfo}>
          {["Late in", "Early leave"].includes(attendanceData.status) ? (
            <View style={[styles.status, { backgroundColor: "#FFE1DF" }]}>
              <Text style={[styles.statusText, { color: "#ED2115" }]}>
                {attendanceData.status}
              </Text>
            </View>
          ) : ["Other"].includes(attendanceData.status) ? (
            <View style={[styles.status, { backgroundColor: "#F7F8C5" }]}>
              <Text style={[styles.statusText, { color: "#D8B605" }]}>
                {attendanceData.status}
              </Text>
            </View>
          ) : (
            <View style={[styles.status, { backgroundColor: "#CBFFC5" }]}>
              <Text style={[styles.statusText, { color: "#1CD919" }]}>
                {attendanceData.status}
              </Text>
            </View>
          )}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/icons/bold-clock.png")}
              style={{ width: 28, height: 28, marginTop: 6, marginRight: 13 }}
            />
            <Text style={styles.timeText}>{attendanceData.time}</Text>
          </View>
          <View
            style={{
              width: 307,
              height: 1.5,
              backgroundColor: "#94A3B8",
              opacity: 0.4,
              marginVertical: 4,
            }}
          />
          <Text style={styles.dateText}>{attendanceData.date}</Text>
        </View>
        <Image
          source={require("../../../assets/icons/scan-frame.png")}
          style={styles.scanFrame}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.infoBox}
          onPress={() => goToProfile(attendanceData.employeeID)}
        >
          <View style={styles.iconBox}>
            <Image
              source={require("../../../assets/icons/user.png")}
              style={{ width: 33, height: 33 }}
            />
          </View>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: "IBMPlexSans_400Regular",
              color: "black",
            }}
          >
            {attendanceData.employeeName}
          </Text>
          <Image
            source={require("../../../assets/icons/left-arrow.png")}
            style={{ width: 17, height: 22 }}
          />
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../../assets/icons/white-briefcase.png")}
              style={{ width: 33, height: 33 }}
            />
          </View>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: "IBMPlexSans_400Regular",
              color: "black",
            }}
          >
            {attendanceData.position}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../../assets/icons/white-barcode.png")}
              style={{ width: 33, height: 33 }}
            />
          </View>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: "IBMPlexSans_400Regular",
              color: "black",
            }}
          >
            {attendanceData.action}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.iconBox}>
            <Image
              source={require("../../../assets/icons/white-camera.png")}
              style={{ width: 33, height: 33 }}
            />
          </View>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: "IBMPlexSans_400Regular",
              color: "black",
            }}
          >
            IOT-DEVICE1
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AttendanceDetails;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    flex: 1,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    backgroundColor: "#E5EFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 20,
    rowGap: 20,
  },
  generalInfo: {
    width: "100%",
    height: 130,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 2,
    marginVertical: 24,
  },
  status: {
    height: 20,
    width: 77,
    borderRadius: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  statusText: {
    fontSize: 13,
    fontFamily: "IBMPlexSans_500Medium",
    textAlignVertical: "top",
  },
  timeText: {
    fontSize: 32,
    fontFamily: "IBMPlexSans_500Medium",
    color: "#0E305D",
  },
  dateText: {
    fontSize: 20,
    fontFamily: "IBMPlexSans_400Regular",
    color: "#4E6887",
  },
  scan: {
    paddingBottom: (168 - 123) / 2,
  },
  scanFrame: {
    position: "absolute",
    top: 194 - 168,
    left: Dimensions.get("window").width / 2 - 168 / 2,
    width: 168,
    height: 168,
    zIndex: 2,
  },
  infoBox: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    columnGap: 21,
    alignItems: "center",
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#95ABC7",
    justifyContent: "center",
    alignItems: "center",
  },
});
