import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = () => {
  return (
    <View style={styles.btnContainer}>
      <Image
        source={require("../../../assets/icons/screen-header.png")}
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
