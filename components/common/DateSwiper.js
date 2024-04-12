import React, { useState } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";

const DateSwiper = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderDateItem = ({ item }) => {
    const isItemSelected = item.getMonth() === selectedDate.getMonth();

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isItemSelected ? "lightblue" : "white",
        }}
      >
        <Text>{item.toDateString()}</Text>
      </View>
    );
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    // Reposition the selected date to the center of the screen
    // You can implement the logic to scroll the FlatList to the selected date here
  };

  const dates = [
    new Date(),
    new Date(new Date().setMonth(new Date().getMonth() + 1)),
    new Date(new Date().setMonth(new Date().getMonth() + 2)),
    // Add more dates as needed
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dates}
        renderItem={renderDateItem}
        keyExtractor={(item) => item.toISOString()}
        horizontal
        snapToAlignment="center"
        snapToInterval={Dimensions.get("window").width}
        decelerationRate="fast"
        onMomentumScrollEnd={(event) => {
          const selectedIndex = Math.round(
            event.nativeEvent.contentOffset.x / Dimensions.get("window").width
          );
          handleDateSelection(dates[selectedIndex]);
        }}
      />
    </View>
  );
};

export default DateSwiper;
