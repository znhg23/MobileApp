import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainFeature from "../components/common/MainFeature";
const UserHome = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.welcomeText}>Hi USER!</Text>
        <Text style={styles.secondWelcomeText}>Good Morning</Text>
      </View>
      <View style={styles.notiBar}>
        <Image
          source={require("../assets/icons/clock.png")}
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
            justifyContent: "flex_start",
            rowGap: 10,
          }}
        >
          <Text style={styles.todayText}>Today</Text>
          <Text style={styles.timeText}>23:04:00</Text>
          <Text style={styles.dateText}>Tuesday April 23 - 2024</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Image
            source={require("../assets/images/welcome-image.png")}
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
              icon={require("../assets/icons/google.png")}
              feature="Food"
              info="Order your food now!"
            />
          </View>
          <View style={{ flex: 1, backgroundColor: "red" }}></View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            columnGap: 15,
          }}
        >
          <View style={styles.feature}></View>
          <View style={{ flex: 1, backgroundColor: "red" }}></View>
        </View>
      </View>
    </View>
  );
};
export default UserHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    rowGap: 16,
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
    backgroundColor: "blue",
    rowGap: 15,
  },
  feature: { flex: 1, backgroundColor: "yellow" },

  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0E305D",
  },
  secondWelcomeText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#94A3B8",
  },
  generalInfoText: {
    fontSize: 17,
    fontWeight: "normal",
    color: "#0E305D",
  },
  todayText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0E305D",
  },
  timeText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#0E305D",
  },
  dateText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#94A3B8",
  },
});
