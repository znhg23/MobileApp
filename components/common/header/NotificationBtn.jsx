import React from "react";
import { View, Image } from "react-native";

import styles from "./screenheader.style";

const NotificationBtn = ({ mode, isTabStack }) => {
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
        { justifyContent: "flex-end" },
        isTabStack ? { marginRight: 16 } : { marginRight: 0 },
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
