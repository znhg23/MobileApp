import React, { useState } from "react";
import { Pressable, View, Image, Text, StyleSheet } from "react-native";

import moment from "moment";
import MonthPicker from "react-native-month-picker";

import {
  useFonts,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
import { format } from "date-fns";

const MonthPickers = () => {
  console.log(selectedDate);
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleOpen(true)} style={styles.input}>
        <Text style={styles.inputText}>
          {value ? moment(value).format("MM/YYYY") : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="fade"
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <MonthPicker
              selectedDate={value || new Date()}
              onMonthChange={onChange}
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={() => toggleOpen(false)}
            >
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    // <View>
    //   <Pressable
    //     onPress={showDatePicker}
    //     style={{
    //       flexDirection: "row",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <Image
    //       source={require("../../assets/icons/calendar.png")}
    //       style={{ width: 24, height: 24, marginRight: 10 }}
    //     />
    //     <Text
    //       style={{
    //         fontFamily: "IBMPlexSans_500Medium",
    //         fontSize: 24,
    //         color: "#0E305D",
    //       }}
    //     >
    //       {format(selectedDate, "yyyy-MM-dd")}
    //     </Text>
    //   </Pressable>
    //   <DateTimePickerModal
    //     isVisible={isDatePickerVisible}
    //     mode="date"
    //     onConfirm={handleConfirm}
    //     onCancel={hideDatePicker}
    //   />
    // </View>
  );
};

export default MonthPickers;
const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderRadius: 5,
    width: "100%",
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    fontSize: 16,
    fontWeight: "500",
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginVertical: 70,
  },
  confirmButton: {
    borderWidth: 0.5,
    padding: 15,
    margin: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
