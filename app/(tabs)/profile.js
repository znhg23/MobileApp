import { View, Text } from "react-native";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
export default function Profile() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          title: "Profile",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn />,
          headerRight: () => <NotificationBtn />,
          headerTitleStyle: {
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <Text>Tab Profile</Text>
    </View>
  );
}
