import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
const MainFeature = ({ icon }, feature, info) => {
  return (
    <Pressable style={styles.featureContainer}>
      <Image source={icon} style={{ width: 36, height: 36 }} />
      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
        {feature}
      </Text>
      <Text style={{ color: "white", fontSize: 14 }}>{info}</Text>
    </Pressable>
  );
};
export default MainFeature;
const styles = StyleSheet.create({
  featureContainer: {
    flex: 1,
    borderRadius: 27,
    backgroundColor: "#0E305D",
    padding: 14,
  },
});
