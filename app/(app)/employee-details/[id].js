import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import { Stack } from "expo-router";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import ScreenHeaderBtn from "../../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../../components/common/header/NotificationBtn";
import AttendanceList from "../../../components/common/AttendanceList";
import {
  useFonts,
  IBMPlexSans_300Light,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_700Bold,
} from "@expo-google-fonts/ibm-plex-sans";

export default function EmployeeDetails() {
  const { id } = useLocalSearchParams();
  console.log(id);
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
          title: "Employee Details",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0E305D",
          },
          headerLeft: () => (
            <TouchableWithoutFeedback onPress={() => router.back()}>
              <Image
                source={require("../../../assets/icons/left-white-arrow.png")}
                style={{ width: 20, height: 20 }}
              />
            </TouchableWithoutFeedback>
          ),
          headerShadowVisible: false,
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
            <Image
              source={require("../../../assets/icons/edit.png")}
              style={{ height: 31, width: 31 }}
            />
          </View>
        </View>
        <View style={styles.personalInfo}>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.emailText}>dung.truongscy@gmail.com</Text>
          <Text style={styles.positionText}>Staff</Text>
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
                <Text style={styles.numberDayInfoText}>24</Text>
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
}
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
    height: 105,
    paddingTop: 16,
    justifyContent: "flex-start",
    alignItems: "center",
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
