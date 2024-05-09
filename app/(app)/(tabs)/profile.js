import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../../components/common/header/NotificationBtn";
import AttendanceList from "../../../components/common/AttendanceList";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../env";
import { router } from "expo-router";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

export default Profile = () => {
  const [profileData, setProfileData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/employeeDetails`);
        console.log(response.data);
        setProfileData(response.data.message);
      } catch (error) {
        alert(error.response.data.message || "An error occurred");
      }
    };

    fetchData();
  }, []);

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
  if (!profileData) return <ActivityIndicator size="large" color="#94A3B8" />;

  const onEdit = () => {
    router.push("change-password");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0E305D",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0E305D",
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn mode="dark" isTabStack={true} />,
          headerRight: () => <NotificationBtn mode="dark" isTabStack={true} />,
          headerTitleStyle: {
            fontFamily: "IBMPlexSans_500Medium",
            color: "white",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <View style={styles.bottomContainer}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={styles.leftInfo}>
            <View style={styles.workingTime}>
              <Text style={styles.workingTimeText}>07:00-11:00</Text>
            </View>
            <View style={styles.workingTime}>
              <Text style={styles.workingTimeText}>13:00-17:00</Text>
            </View>
          </View>
          <View style={styles.rightInfo}>
            <TouchableOpacity onPress={onEdit}>
              <Image
                source={require("../../../assets/icons/change-password.png")}
                style={{ width: 23, height: 22 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.personalInfo}>
          <Text style={styles.nameText}>{profileData.name}</Text>
          <Text style={styles.emailText}>{profileData.email}</Text>
          <Text style={styles.emailText}>{profileData.phone_num}</Text>
          <Text style={styles.positionText}>
            {profileData.position.charAt(0).toUpperCase() +
              profileData.position.slice(1)}
          </Text>
        </View>
        <View style={styles.generalInfo}>
          <View
            style={{
              flex: 1.2,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={[styles.dayInfo, { justifyContent: "flex-start" }]}>
              <Image
                source={require("../../../assets/icons/verified.png")}
                style={{ width: 36, height: 36 }}
              />
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.dayInfoText}>Working days</Text>
                <Text style={styles.numberDayInfoText}>
                  {profileData.working_days}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 26,
                width: 1.5,
                backgroundColor: "#94A3B8",
                opacity: 0.4,
              }}
            />

            <View style={[styles.dayInfo, { justifyContent: "flex-end" }]}>
              <Image
                source={require("../../../assets/icons/yellow-flag.png")}
                style={{ width: 36, height: 36 }}
              />
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.dayInfoText}>Absence days</Text>
                <Text style={styles.numberDayInfoText}>2</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 1.5,
              width: 307,
              backgroundColor: "#94A3B8",
              opacity: 0.4,
            }}
          />
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Date Time Picker</Text>
          </View>
        </View>
        <View style={styles.listBar}>
          <View style={{ width: 42 }}>
            <Text style={[styles.barText, {}]}>Date</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.barText}>Check in</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.barText}>Check out</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text style={styles.barText}>Total Hr's</Text>
          </View>

          <View style={{ width: 20, height: 20 }} />
        </View>
        <AttendanceList />
      </View>

      <Image
        source={require("../../../assets/icons/avatar.png")}
        style={styles.avatar}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-end",
    height: "85%",
    backgroundColor: "white",
  },
  avatar: {
    position: "absolute",
    top: 30,
    left: Dimensions.get("window").width / 2 - 82.5,
    width: 165,
    height: 165,
    zIndex: 2, // make sure the image is above the views
  },
  leftInfo: {
    flex: 1,
    rowGap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: 16,
  },
  rightInfo: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 16,
  },
  workingTime: {
    height: 26,
    width: 76,
    borderRadius: 10,
    backgroundColor: "#CCDDF3",
    justifyContent: "center",
    alignItems: "center",
  },
  workingTimeText: {
    fontSize: 10,
    color: "black",
    fontFamily: "IBMPlexSans_400Regular",
  },
  personalInfo: {
    justifyContent: "flex-start",
    rowGap: 2,
    alignItems: "center",
    marginBottom: 12,
  },
  nameText: {
    fontSize: 24,
    color: "#0E305D",
    fontFamily: "IBMPlexSans_500Medium",
  },
  emailText: {
    fontSize: 13,
    color: "#7E8FA6",
    fontFamily: "IBMPlexSans_300Light",
  },
  positionText: {
    fontSize: 18,
    color: "black",
    fontFamily: "IBMPlexSans_400Regular",
  },
  generalInfo: {
    justifyContent: "center",
    alignItems: "center",
    height: 128,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 18,
    paddingVertical: 9,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  dayInfo: {
    flex: 1,
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  dayInfoText: {
    fontSize: 14,
    color: "#94A3B8",
    fontFamily: "IBMPlexSans_400Regular",
  },
  numberDayInfoText: {
    fontSize: 20,
    color: "#0E305D",
    fontFamily: "IBMPlexSans_500Medium",
  },
  listBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 41,
    width: "100%",
    backgroundColor: "#0E305D",
  },
  barText: {
    fontSize: 16,
    color: "white",
    fontFamily: "IBMPlexSans_500Medium",
    textAlign: "center",
  },
});
