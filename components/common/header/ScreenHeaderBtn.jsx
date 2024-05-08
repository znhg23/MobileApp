import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useAuth } from "../../AuthContext";
import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ mode, isTabStack }) => {
  const { authState, onLogout } = useAuth();
  let source;
  if (mode === "dark") {
    source = require("../../../assets/icons/white-logout.png");
  } else {
    source = require("../../../assets/icons/logout.png");
  }
  const logout = async () => {
    // Show confirmation modal before logging out
    Alert.alert(
      "Confirm logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await onLogout();
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <TouchableOpacity
      onPress={logout}
      style={[
        styles.btnContainer,
        isTabStack ? { marginLeft: 16 } : { marginLeft: 0 },
      ]}
    >
      <Image
        source={source}
        style={{
          width: 21,
          height: 22,
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
