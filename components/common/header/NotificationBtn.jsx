import React from "react";
import { View, Image } from "react-native";

import styles from "./screenheader.style";

const NotificationBtn = () => {
  return (
    <View style={[styles.btnContainer, { justifyContent: "flex-end" }]}>
      <Image
        source={require("../../../assets/icons/bell.png")}
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
