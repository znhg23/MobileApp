import React from "react";
import { View, Image } from "react-native";

import styles from "./screenheader.style";

const NotificationBtn = ({ mode }) => {
  let source;
  if (mode === "dark") {
    source = require("../../../assets/icons/white-bell.png");
  } else {
    source = require("../../../assets/icons/bell.png");
  }

  return (
    <View
      style={[
        styles.btnContainer,
        { justifyContent: "flex-end", marginRight: 16 },
      ]}
    >
      <Image
        source={source}
        style={{
          width: 24,
          height: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </View>
  );
};

export default NotificationBtn;
