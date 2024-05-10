import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  UIManager,
  Platform,
  Image,
  ActivityIndicator,
  Animated,
} from "react-native";
import axios from "axios";
import BASE_URL from "../../env";
import {
  useFonts,
  IBMPlexSans_400Regular,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
// const data = [
//   {
//     id: 0,
//     date: "10",
//     weekDay: "Tue",
//     checkin: "9:00",
//     checkout: "6:00",
//     totalHours: "8h30m",
//     expandContent: [
//       { id: 1, time: "9:00", action: "Check in", status: "On time" },
//       { id: 2, time: "1:00", action: "Leave", status: "Break" },
//       { id: 3, time: "2:00", action: "Return", status: "Break" },
//       { id: 4, time: "6:00", action: "Check out", status: "On time" },
//       { id: 5, time: "6:30", action: "Check in", status: "Late in" },
//       { id: 6, time: "6:30", action: "Check out", status: "Early leave" },
//     ],
//   },
//   {
//     id: 1,
//     date: "9",
//     weekDay: "Mon",
//     checkin: "9:00",
//     checkout: "6:00",
//     totalHours: "8h30m",
//     expandContent: [
//       { id: 1, time: "9:00", action: "Check in", status: "On time" },
//       { id: 2, time: "1:00", action: "Leave", status: "Break" },
//       { id: 3, time: "2:00", action: "Return", status: "Break" },
//       { id: 4, time: "6:00", action: "Check out", status: "On time" },
//       { id: 5, time: "6:30", action: "Check in", status: "Late in" },
//       { id: 6, time: "6:30", action: "Check out", status: "Early leave" },
//     ],
//   },
//   {
//     id: 2,
//     date: "8",
//     weekDay: "Sat",
//     checkin: "9:00",
//     checkout: "6:00",
//     totalHours: "8h30m",
//     expandContent: [
//       { id: 1, time: "9:00", action: "Check in", status: "On time" },
//       { id: 2, time: "1:00", action: "Leave", status: "Break" },
//       { id: 3, time: "2:00", action: "Return", status: "Break" },
//       { id: 4, time: "6:00", action: "Check out", status: "On time" },
//       { id: 5, time: "6:30", action: "Check in", status: "Late in" },
//       { id: 6, time: "6:30", action: "Check out", status: "Early leave" },
//     ],
//   },
//   // Add more items as needed
// ];

const AttendanceList = () => {
  // Initialize isExpanded in data
  const [datas, setDatas] = useState([]);
  const [listData, setListData] = useState();

  const getDiff = (checkin, checkout) => {
    const checkinSplit = checkin.split(":");
    const checkinSeconds =
      +checkinSplit[0] * 60 * 60 + +checkinSplit[1] * 60 + +checkinSplit[2];
    const checkoutSplit = checkout.split(":");
    const checkoutSeconds =
      +checkoutSplit[0] * 60 * 60 + +checkoutSplit[1] * 60 + +checkoutSplit[2];
    const diff = checkoutSeconds - checkinSeconds;
    return diff;
  };

  const formatData = (data) => {
    const groupedData = {};
    data.forEach((item) => {
      const date = new Date(item.date);
      if (!groupedData[date]) {
        groupedData[date] = {
          id: date,
          date: date.getDate(),
          month: new Date(item.date).toLocaleDateString("en-US", {
            month: "numeric",
          }),
          weekDay: new Date(item.date).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          checkin: "9:00", // You may need to populate this from your data
          checkout: "6:00", // You may need to populate this from your data
          totalHours: "8h30", // You may need to calculate this based on checkin/checkout times
          expandContent: [],
        };
      }
      groupedData[date].expandContent.push({
        id: groupedData[date].expandContent.length + 1,
        time: item.time,
        name: item.name,
        status: item.status,
      });
    });
    temp = Object.values(groupedData).filter((item) => item.month === "4");
    temp.forEach((item) => {
      item.expandContent = item.expandContent.sort((a, b) => {
        // Convert time strings to Date objects for comparison
        const timeA = new Date(`1970-01-01T${a.time}`);
        const timeB = new Date(`1970-01-01T${b.time}`);
        return timeA - timeB;
      });
      item.checkin = item.expandContent[0].time;
      item.checkout = item.expandContent[item.expandContent.length - 1].time;
      let tempSeconds = 0;
      console.log("date", item.date);
      item.expandContent.forEach((descItem, index) => {
        if (descItem.name === "Check In" && item.expandContent[index + 1]) {
          tempSeconds =
            tempSeconds +
            getDiff(descItem.time, item.expandContent[index + 1].time);
          console.log(tempSeconds);
        }
      });
      const hours = Math.floor(tempSeconds / 3600);
      const minutes = Math.floor((tempSeconds % 3600) / 60);
      item.totalHours = `${hours}h${minutes}m`;
    });
    return temp;
  };

  // Call the formatData function with your data

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${BASE_URL}/user/attendanceTrack`)
        .then((res) => {
          setDatas(res.data.result.slice().reverse());
          const formattedData = formatData(res.data.result.slice().reverse());
          setListData(formattedData);
        })
        .catch((err) => {
          console.log(err.response || "An error occurred");
        });
    };
    fetchData();
  }, []);
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
  });

  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  if (!fontsLoaded && !fontError) {
    return null;
  }
  if (!listData) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="#94A3B8" />
      </View>
    );
  }

  const ExpandableComponent = ({ item }) => {
    const [opended, setOpended] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));

    const updateLayout = () => {
      if (!opended) {
        Animated.timing(animation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(animation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }
      setOpended(!opended);
    };

    const layoutHeight = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 52 * item.expandContent.length],
    });

    return (
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={() => updateLayout()}>
          <View style={styles.touchRow}>
            <View style={styles.dateBox}>
              <Text style={styles.dateText}>{item.date}</Text>
              <Text style={styles.weekDayText}>{item.weekDay}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.timeText}>{item.checkin}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.timeText}>{item.checkout}</Text>
            </View>
            <Text style={[styles.timeText, { flex: 0.7 }]}>
              {item.totalHours}
            </Text>
            <Image
              source={require("../../assets/icons/expand-arrow.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <Animated.View style={{ height: layoutHeight, overflow: "hidden" }}>
          {item.expandContent.map((descItem, key) => (
            <View key={key} style={styles.expandItem}>
              <View style={[styles.dateBox, { backgroundColor: "white" }]} />
              <View style={{ flex: 1 }}>
                <Text style={styles.timeText}>{descItem.time}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.timeText}>{descItem.name}</Text>
              </View>
              {["Late", "Early leave"].includes(descItem.status) ? (
                <View style={styles.redStatus}>
                  <Text style={[styles.statusText, { color: "#ED2115" }]}>
                    {descItem.status}
                  </Text>
                </View>
              ) : (
                <View style={styles.greenStatus}>
                  <Text style={[styles.statusText, { color: "#1CD919" }]}>
                    {descItem.status}
                  </Text>
                </View>
              )}

              <View
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              />
            </View>
          ))}
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({ item }) => <ExpandableComponent item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  row: {
    flex: 1,
    width: "100%",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#94A3B8",
  },
  touchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateBox: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5EFFF",
    borderRadius: 8,
  },
  dateText: {
    fontFamily: "IBMPlexSans_500Medium",
    fontSize: 16,
    color: "black",
  },
  weekDayText: {
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 12,
    color: "black",
  },
  timeText: {
    textAlign: "center",
    fontFamily: "IBMPlexSans_400Regular",
    fontSize: 14,
    color: "black",
  },
  expandItem: {
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greenStatus: {
    flex: 0.7,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CBFFC5",
    borderRadius: 8,
  },
  redStatus: {
    flex: 0.7,
    height: 20,
    alignItems: "center",
    backgroundColor: "#FFE1DF",
    borderRadius: 8,
  },
  statusText: {
    fontFamily: "IBMPlexSans_500Medium",
    fontSize: 12,
    textAlignVertical: "top",
  },
});

export default AttendanceList;
