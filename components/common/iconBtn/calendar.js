import React from "react";
import { View, Image } from "react-native";

import styles from "../header/screenheader.style";

const CalendarBtn = ({ mode }) => {
  let source = require("../../../assets/icons/calendar.png");

  return (
    <View
      style={[
        styles.btnContainer,
        { justifyContent: "", marginRight: 16, marginTop: 10 },
      ]}
    >
      <Image
        source={source}
        style={{
          width: 30,
          height: 30,
        }}
      />
    </View>
  );
};

export default CalendarBtn;
