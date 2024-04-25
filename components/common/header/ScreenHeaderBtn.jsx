import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ mode }) => {
  let source;
  if (mode === "dark") {
    source = require("../../../assets/icons/white-screen-header.png");
  } else {
    source = require("../../../assets/icons/screen-header.png");
  }
  return (
    <View style={styles.btnContainer}>
      <Image
        source={source}
        style={{
          width: 21,
          height: 22,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default ScreenHeaderBtn;
