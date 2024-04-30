import { 
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
 } from "react-native";
import React, { useState, useRef } from "react";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../components/common/header/NotificationBtn";
import DateSwiper from "../components/common/DateSwiper";
import DateTimePicker from "@react-native-community/datetimepicker"; 


const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };
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
          title: "Dashboard",
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
      <DateTimePicker
        value={date}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
      />
      <View style={styles.dateContainer}>
          <Image source={require("../assets/icons/calendar.png")} style={{width: 30, height: 30, marginRight: 10, marginBottom: 12}}/>
          <Text style={styles.title}>
            {date.toLocaleString()}
          </Text>
        </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 24,
    paddingHorizontal: 24,
    maxHeight: 200,
    backgroundColor: '#94A3B8',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  header: {
    paddingHorizontal: 16,
  },
  title: {
    flex: 0,
    fontSize: 24,
    fontWeight: '700',
    color: '#0E305D',
    marginBottom: 12,
  },
  dateContainer: {
    justifyContent: 'center',
    flexDirection: 'row', // Arrange components horizontally
    alignItems: 'center', // Align items vertically
  },
  dateText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Add spacing between calendarBtn and dateText
  },
})
