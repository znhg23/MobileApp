import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  eachWeekOfInterval,
  subDays,
  addDays,
  eachDayOfInterval,
  format,
} from "date-fns";
import {
  useFonts,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_400Regular,
} from "@expo-google-fonts/ibm-plex-sans";
import { PagerView } from "react-native-pager-view";
const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);
const dates = eachWeekOfInterval(
  {
    start: subDays(new Date(), 7),
    end: addDays(new Date(), 7),
  },
  {
    weekStartsOn: 1,
  }
).reduce((acc, cur) => {
  const allDays = eachDayOfInterval({ start: cur, end: addDays(cur, 6) });
  acc.push(allDays);
  return acc;
}, []);

const DateSwiper = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
  //   const loadFonts = () => {
  //     useFonts({
  //       IBMPlexSans_600SemiBold,
  //       IBMPlexSans_400Regular,
  //     });
  //   };

  //   const [selectedDate, setSelectedDate] = useState(new Date());
  //   const onDateChange = (date) => {
  //     setSelectedDate(date);
  //   };

  //   const selectedIndex = dates.findIndex((week) =>
  //     week.some((day) => day == selectedDate)
  //   );

  //   console.log(selectedIndex);

  //   if (!loadFonts) {
  //     return null;
  //   }

  //   const isSelected = (date) => {
  //     return date.toDateString() === selectedDate.toDateString();
  //   };

  //   return (
  //     <AnimatedPagerView style={styles.container} initialPage={1}>
  //       {dates.map((week, index) => {
  //         return (
  //           <View key={index}>
  //             <View style={styles.row}>
  //               {week.map((day) => {
  //                 const txt = format(day, "EEE");
  //                 return (
  //                   <View key={day}>
  //                     <Pressable
  //                       style={styles.days}
  //                       onPress={() => {
  //                         onDateChange(day);
  //                       }}
  //                     >
  //                       <Text
  //                         style={{
  //                           fontFamily: "IBMPlexSans_600SemiBold",
  //                           fontSize: 30,
  //                           color: "#0E305D",
  //                           opacity: isSelected(day) ? 1 : 0.5,
  //                         }}
  //                       >
  //                         {day.getDate()}
  //                       </Text>
  //                       <Text
  //                         style={{
  //                           fontFamily: "IBMPlexSans_400Regular",
  //                           fontSize: 15,
  //                           color: "#0E305D",
  //                           opacity: isSelected(day) ? 1 : 0.5,
  //                         }}
  //                       >
  //                         {txt}
  //                       </Text>
  //                     </Pressable>
  //                   </View>
  //                 );
  //               })}
  //             </View>
  //           </View>
  //         );
  //       })}
  //     </AnimatedPagerView>
  //   );
};

export default DateSwiper;

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  days: {
    alignItems: "center",
  },
});
