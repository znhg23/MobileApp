import React, { useState } from "react";
import { Pressable, View, Image, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  useFonts,
  IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";
import { format } from "date-fns";

const MonthPicker = ({ selectedDate, onDateChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  console.log(selectedDate);
  let [fontsLoaded, fontError] = useFonts({
    IBMPlexSans_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    onDateChange(date);
    hideDatePicker();
  };

  return (
    <View>
      <Pressable
        onPress={showDatePicker}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/calendar.png")}
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text
          style={{
            fontFamily: "IBMPlexSans_500Medium",
            fontSize: 24,
            color: "#0E305D",
          }}
        >
          {format(selectedDate, "yyyy-MM-dd")}
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default MonthPicker;
