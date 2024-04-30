import { View, Text } from "react-native";
import { Stack } from "expo-router";
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";
import NotificationBtn from "../../components/common/header/NotificationBtn";
export default function ControlPanel() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen
        options={{
          title: "Control Panel",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn isTabStack={true} />,
          headerRight: () => <NotificationBtn isTabStack={true} />,
          headerTitleStyle: {
            color: "#0E305D",
            fontSize: 20,
            fontWeight: "normal",
          },
        }}
      />
      <Text>Control Panel</Text>
    </View>
  );
}
